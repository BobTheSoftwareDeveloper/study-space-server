import { Request, Response, Router } from 'express'
import { getStudySpaces } from '../services/studySpace.service'
import { errorHandler } from '../utils/errorHandler'

const studySpaceRoute = Router()

studySpaceRoute.route('/').get(async (req: Request, res: Response) => {
  try {
    const data = await getStudySpaces()

    return res.status(200).json(data)
  } catch (err) {
    errorHandler(err, 'studySpaceRoute / get')
    return res.status(500).json(err.message)
  }
})

export { studySpaceRoute }
