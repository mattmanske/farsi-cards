//-----------  Imports  -----------//

import { createFormAction }      from 'redux-form-saga'
import { createActionConstants } from 'utilities/sagas'

//-----------  Definitions  -----------//

export const VERBS = createActionConstants('VERBS', ['CREATE', 'UPDATE'])

//-----------  Words Actions  -----------//

export const formActions = {
  create : createFormAction(VERBS.CREATE),
  update : createFormAction(VERBS.UPDATE),
}
//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => ({ type: VERBS.SUCCESS, data }),
  failure: (error) => ({ type: VERBS.FAILURE, error }),
}
