import request from 'supertest'

import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Valid Name',
        email: 'valid-email@mail.com',
        password: 'valid-password',
        passwordConfirmation: 'valid-password'
      })
      .expect(200)
  })
})
