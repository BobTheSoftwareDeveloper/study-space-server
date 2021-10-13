import path from 'path'
import { AzureObjectRecognition } from './AzureObjectRecognition'

const FILE_NAME = 'classroom_back_of_head.jpg' // 'lecture_hall_4_people.jpg'

const main = async () => {
  const filePath = path.resolve(__dirname, 'sample-images', FILE_NAME)

  const recognitionSystem = new AzureObjectRecognition(filePath)
  const people = await recognitionSystem.detect()
  console.log('people', people)
}
main()
