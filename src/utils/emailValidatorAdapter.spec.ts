import validator from 'validator'

import { EmailValidatorAdapter } from './emailValidatorAdapter'

jest.mock('validator', () => ({
  isEmail () {
    return true
  }
}))

const makeSut = (): EmailValidatorAdapter => new EmailValidatorAdapter()

describe('EmailValidator Adapter', () => {
  test('Should returns false if validator returns false', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)

    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBe(false)
  })

  test('Should returns true if validator returns true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('valid_email@mail.com')

    expect(isValid).toBe(true)
  })

  test('Should returns false if validator returns false', () => {
    const sut = makeSut()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')

    sut.isValid('any_email@mail.com')

    expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com')
  })
})
