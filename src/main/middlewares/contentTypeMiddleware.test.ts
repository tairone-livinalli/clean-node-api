import request from 'supertest'

import app from '../config/app'

describe('Content Type Middleware', () => {
  test('Should return default content type as json', async () => {
    app.get('/test-content-type', (req, res) => {
      res.send('')
    })

    await request(app)
      .get('/test-content-type')
      .expect('content-type', /json/)
  })

  test('Should return content type as xml when override', async () => {
    app.get('/test-content-type-xml', (req, res) => {
      res.type('xml')
      res.send('')
    })

    await request(app)
      .get('/test-content-type-xml')
      .expect('content-type', /xml/)
  })
})
