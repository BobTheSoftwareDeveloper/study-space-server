import { Schema } from 'mongoose'
import { mongooseConnection } from '../utils/mongoose'
import { StudySpaceType } from '../types'

const studySpaceSchema = new Schema<StudySpaceType>(
  {
    name: {
      type: Schema.Types.String,
      index: true,
    },
    occupancyLevel: {
      type: Schema.Types.Number,
      index: true,
    },
    maxOccupancyLevel: {
      type: Schema.Types.Number,
      index: true,
    },
    noiseLevel: {
      type: Schema.Types.Number,
      index: true,
    },
    history: Schema.Types.Array,
    location: {
      latitude: Schema.Types.Decimal128,
      longitude: Schema.Types.Decimal128,
    },
  },
  {
    strict: false,
  }
)

const StudySpaceModel = mongooseConnection.model<StudySpaceType>('spaces', studySpaceSchema)

export { StudySpaceModel }
