import { ComputerVisionClient, ComputerVisionModels } from '@azure/cognitiveservices-computervision'
import { CognitiveServicesCredentials } from '@azure/ms-rest-azure-js'
import fs from 'fs'
import { config } from './config'
import { ObjectRecognition } from './ObjectRecognition'

// Setup Azure client
const computerVisionKey = config.AZURE_COMPUTER_VISION_KEY_1
const computerVisionEndPoint = config.AZURE_COMPUTER_VISION_ENDPOINT
const cognitiveServiceCredentials = new CognitiveServicesCredentials(computerVisionKey)
const client = new ComputerVisionClient(cognitiveServiceCredentials, computerVisionEndPoint)

const getDetectObjectResult = async (filePath: string): Promise<ComputerVisionModels.DetectObjectsInStreamResponse> => {
  const fileStream = fs.readFileSync(filePath)
  const options: ComputerVisionModels.ComputerVisionClientDetectObjectsInStreamOptionalParams = {
    modelVersion: 'latest',
  }

  const result = await client.detectObjectsInStream(fileStream, options)
  return result
}

const countNumberOfPerson = async (result: ComputerVisionModels.DetectObjectsInStreamResponse): Promise<number> => {
  let peopleCounter = 0
  if (result.objects) {
    for (const obj of result.objects) {
      if (obj?.object === 'person' && (obj?.confidence ?? 0) >= 0.5) {
        peopleCounter += 1
      }
    }
  }
  return peopleCounter
}

export class AzureObjectRecognition extends ObjectRecognition {
  constructor(filePath: string) {
    super(filePath)
  }

  async detect(): Promise<number> {
    try {
      const result = await getDetectObjectResult(this.filePath)
      const people = await countNumberOfPerson(result)
      return people
    } catch (err) {
      console.error('azure error:', err)
      return 0
    }
  }
}
