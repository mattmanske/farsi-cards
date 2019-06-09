//-----------  Imports  -----------//

import { createFormAction }      from 'redux-form-saga'
import { createActionConstants } from 'utilities/sagas'

//-----------  Definitions  -----------//

export const VERBS = createActionConstants('VERBS', ['CREATE', 'UPDATE', 'DELETE'])

//-----------  Words Actions  -----------//

export const formActions = {
  create : createFormAction(VERBS.CREATE),
  update : createFormAction(VERBS.UPDATE),
}

export const wordsActions = {
  delete: (id) => ({ type: VERBS.DELETE, id })
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => ({ type: VERBS.SUCCESS, data }),
  failure: (error) => ({ type: VERBS.FAILURE, error }),
}
