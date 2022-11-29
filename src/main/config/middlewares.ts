import { Express } from 'express'
import { bodyParser } from '../middlewares/bodyParserMiddleware'

export default (app: Express): void => {
  app.use(bodyParser)
}
