import { StudySpaceModel } from '../models'
import { StudySpaceType } from '../types'

export const getStudySpaces = async (): Promise<StudySpaceType[] | null> => {
  try {
    const studySpaceObj = await StudySpaceModel.find().lean().exec()
    return studySpaceObj
  } catch (err) {
    return Promise.reject(err)
  }
}
