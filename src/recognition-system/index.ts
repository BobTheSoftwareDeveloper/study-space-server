import path from 'path'
import { AWSObjectRecognition } from './AWSObjectRecognition'
import { AzureObjectRecognition } from './AzureObjectRecognition'
import { GoogleCloudObjectRecognition } from './GoogleCloudObjectRecognition'

const FILE_NAME = 'student_study_space.jpg'

const main = async () => {
  const filePath = path.resolve(__dirname, 'sample-images', FILE_NAME)

  console.log('FILE_NAME', FILE_NAME)

  let recognitionSystem = new AzureObjectRecognition(filePath)
  console.log(`Azure detection: ${await recognitionSystem.detect()}`)
  recognitionSystem = new AWSObjectRecognition(filePath)
  console.log(`AWS detection: ${await recognitionSystem.detect()}`)
  recognitionSystem = new GoogleCloudObjectRecognition(filePath)
  console.log(`Google Cloud detection: ${await recognitionSystem.detect()}`)
}
main()
