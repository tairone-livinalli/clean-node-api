import { EmailValidatorAdapter } from './emailValidatorAdapter'

describe('EmailValidator Adapter', () => {
  test('Should returns false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')

    expect(isValid).toBe(false)
  })
})
