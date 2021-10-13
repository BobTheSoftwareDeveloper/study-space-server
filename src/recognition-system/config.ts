import dotenv from 'dotenv'
import path from 'path'
import { decodeServiceAccount } from '../utils/jsonParser'

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

const config = {
  AZURE_COMPUTER_VISION_KEY_1: process.env.AZURE_COMPUTER_VISION_KEY_1,
  AZURE_COMPUTER_VISION_REGION: process.env.AZURE_COMPUTER_VISION_REGION,
  AZURE_COMPUTER_VISION_ENDPOINT: process.env.AZURE_COMPUTER_VISION_ENDPOINT,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  AWS_REGION: process.env.AWS_REGION,
  GOOGLE_CLOUD_SERVICE_ACCOUNT: decodeServiceAccount(process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT),
}

export { config }
