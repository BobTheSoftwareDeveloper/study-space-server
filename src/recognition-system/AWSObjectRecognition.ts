import AWS from 'aws-sdk'
import fs from 'fs'
import { config } from './config'
import { ObjectRecognition } from './ObjectRecognition'

// Setup AWS client
const AWSConfig = new AWS.Config({
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_KEY,
  region: config.AWS_REGION,
})
const client = new AWS.Rekognition()
client.config = AWSConfig

const detectLabelPromise = async (params: AWS.Rekognition.Types.DetectLabelsRequest) =>
  new Promise((resolve, reject) => {
    client.detectLabels(params, (err, data) => {
      if (err) {
        return reject(err)
      }
      return resolve(data)
    })
  })

const getDetectObjectResult = async (filePath: string): Promise<AWS.Rekognition.DetectLabelsResponse> => {
  const fileStream = fs.readFileSync(filePath)
  const params: AWS.Rekognition.Types.DetectLabelsRequest = {
    Image: {
      Bytes: fileStream,
    },
  }
  const result = await detectLabelPromise(params)
  return result
}

const countNumberOfPerson = async (
  result: AWS.Rekognition.DetectLabelsResponse,
  threshold: number
): Promise<number> => {
  let people = 0
  if (result.Labels) {
    for (const label of result.Labels) {
      if (label.Name === 'Person') {
        for (const personObj of label?.Instances ?? []) {
          if ((personObj?.Confidence ?? 0) >= threshold * 100) {
            // Confidence score in AWS is returned in percentage
            people += 1
          }
        }
      }
    }
  }
  return people
}

export class AWSObjectRecognition extends ObjectRecognition {
  constructor(filePath: string) {
    super(filePath)
  }

  async detect(): Promise<number> {
    try {
      const result = await getDetectObjectResult(this.filePath)
      const people = await countNumberOfPerson(result, this.confidenceThreshold)
      return people
    } catch (err) {
      console.error('aws error:', err)
      return 0
    }
  }
}
