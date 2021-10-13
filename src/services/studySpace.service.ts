import { StudySpaceModel, UserModel } from '../models'
import { StudySpaceType } from '../types'

export const getStudySpaces = async (): Promise<StudySpaceType[] | null> => {
  const studySpaceObj = await StudySpaceModel.find().lean().exec()
  return studySpaceObj
}

export const getFavouriteStudySpaces = async (uid: string): Promise<StudySpaceType[] | null> => {
  const userObj = await UserModel.findOne({
    uid,
  })
    .lean()
    .exec()

  const studySpaceObj = await StudySpaceModel.find({
    _id: {
      $in: userObj.favouriteStudySpaces,
    },
  })
    .lean()
    .exec()
  return studySpaceObj
}
