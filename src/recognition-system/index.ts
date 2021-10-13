import path from 'path'
import { AWSObjectRecognition } from './AWSObjectRecognition'
import { AzureObjectRecognition } from './AzureObjectRecognition'

const FILE_NAME = 'classroom_back_of_head.jpg' // 'lecture_hall_4_people.jpg'

const main = async () => {
  const filePath = path.resolve(__dirname, 'sample-images', FILE_NAME)

  let recognitionSystem = new AzureObjectRecognition(filePath)
  recognitionSystem = new AWSObjectRecognition(filePath)

  const people = await recognitionSystem.detect()
  console.log('people', people)
}
main()