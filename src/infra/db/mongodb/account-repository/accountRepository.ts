import { AddAccountRepository } from '../../../../data/protocols/addAccountRepository'
import { AccountModel } from '../../../../domain/models/accountModel'
import { AddAccountModel } from '../../../../domain/useCases/addAccount'
import { MongoHelper } from '../helpers/mongoHelper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')

    const result = await accountCollection.insertOne(accountData)
    const { _id: id, name, email, password } = await accountCollection.findOne({ _id: result.insertedId })

    return { id: id.toString(), name, email, password }
  }
}
