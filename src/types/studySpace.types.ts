import { ObjectId } from 'mongoose'

export interface StudySpaceType {
  name: String
  description: String
  images: Array<String>
  occupancyLevel: Number
  noiseLevel: Number
  history: Array<Object>
  location: {
    latitude: Number
    longitude: Number
  }
  _id: ObjectId
}
