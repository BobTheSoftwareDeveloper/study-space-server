import vision from '@google-cloud/vision'
import { google } from '@google-cloud/vision/build/protos/protos'
import fs from 'fs'
import { ObjectRecognition } from './ObjectRecognition'

// Setup Google Cloud client
const client = new vision.ImageAnnotatorClient()

const getDetectObjectResult = async (filePath: string): Promise<google.cloud.vision.v1.IAnnotateImageResponse> => {
  const fileStream = fs.readFileSync(filePath)
  const [result] = await client.objectLocalization(fileStream)
  return result
}

const countNumberOfPerson = async (
  result: google.cloud.vision.v1.IAnnotateImageResponse,
  threshold: number
): Promise<number> => {
  const labels = result.localizedObjectAnnotations
  let people = 0
  for (const labelObj of labels) {
    if (labelObj.name === 'Person' && (labelObj?.score ?? 0) >= threshold) {
      people += 1
    }
  }
  return people
}

export class GoogleCloudObjectRecognition extends ObjectRecognition {
  constructor(filePath: string) {
    super(filePath)
  }

  async detect(): Promise<number> {
    try {
      const result = await getDetectObjectResult(this.filePath)
      const people = await countNumberOfPerson(result, this.confidenceThreshold)
      return people
    } catch (err) {
      console.error('google cloud error:', err)
      return 0
    }
  }
}
