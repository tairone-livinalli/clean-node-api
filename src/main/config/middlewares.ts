import { Express } from 'express'
import { bodyParser } from '../middlewares/bodyParserMiddleware'
import { contentType } from '../middlewares/contentTypeMiddleware'
import { cors } from '../middlewares/corsMiddleware'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
