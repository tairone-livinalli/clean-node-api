import { AccountModel } from '../../domain/models/accountModel'
import { AddAccountModel } from '../../domain/useCases/addAccount'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
