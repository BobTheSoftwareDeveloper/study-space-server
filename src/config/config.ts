import dotenv from 'dotenv'
import path from 'path'
import { decodeServiceAccount } from '../utils/jsonParser'

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

const config = {
  PORT: process.env.PORT,
  // Pass in FIREBASE_SERVICE_ACCOUNT as a base64 encoded string from env file
  FIREBASE_SERVICE_ACCOUNT: decodeServiceAccount(process.env.FIREBASE_SERVICE_ACCOUNT),
  MONGODB_URI: process.env.MONGODB_URI,
  NODE_ENV: process.env.NODE_ENV,
}

export default config
