export class SignUpController {
  handle (httpRequest: any): any {
    return { statusCode: 400, body: { error: new Error('Missing param: name') } }
  }
}
