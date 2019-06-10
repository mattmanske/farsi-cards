//-----------  Imports  -----------//

import { createFormAction }      from 'redux-form-saga'
import { createActionConstants } from 'utilities/sagas'

//-----------  Definitions  -----------//

export const GROUPS = createActionConstants('GROUPS', ['CREATE', 'UPDATE', 'DELETE'])

//-----------  Words Actions  -----------//

export const formActions = {
  create : createFormAction(GROUPS.CREATE),
  update : createFormAction(GROUPS.UPDATE),
}

export const groupsActions = {
  create : (payload) => ({ type: GROUPS.CREATE, payload }),
  update : (payload) => ({ type: GROUPS.UPDATE, payload }),
  delete : (id) => ({ type: GROUPS.DELETE, id })
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => ({ type: GROUPS.SUCCESS, data }),
  failure: (error) => ({ type: GROUPS.FAILURE, error }),
}
