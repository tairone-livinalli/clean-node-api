import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeSignUpController } from '../factories/signupFactory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}
