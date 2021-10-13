import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

const config = {
  AZURE_COMPUTER_VISION_KEY_1: process.env.AZURE_COMPUTER_VISION_KEY_1,
  AZURE_COMPUTER_VISION_REGION: process.env.AZURE_COMPUTER_VISION_REGION,
  AZURE_COMPUTER_VISION_ENDPOINT: process.env.AZURE_COMPUTER_VISION_ENDPOINT,
}

export { config }
