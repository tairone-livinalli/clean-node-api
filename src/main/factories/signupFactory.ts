import { DbAddAccount } from '../../data/usecases/add-account/dbAddAccount'
import { BcryptAdapter } from '../../infra/criptography/bcryptAdapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/accountRepository'
import { SignUpController } from '../../presentation/controllers/signup/signUpController'
import { EmailValidatorAdapter } from '../../utils/emailValidatorAdapter'

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()

  const emailValidatorAdapter = new EmailValidatorAdapter()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)

  return new SignUpController(emailValidatorAdapter, dbAddAccount)
}
