//-----------  Imports  -----------//

import { createFormAction }      from 'redux-form-saga'
import { createActionConstants } from 'utilities/sagas'

//-----------  Definitions  -----------//

export const WORDS = createActionConstants('WORDS', ['CREATE', 'UPDATE', 'DELETE'])

//-----------  Words Actions  -----------//

export const formActions = {
  create : createFormAction(WORDS.CREATE),
  update : createFormAction(WORDS.UPDATE),
}

export const wordsActions = {
  delete: (id) => ({ type: WORDS.DELETE, id })
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => ({ type: WORDS.SUCCESS, data }),
  failure: (error) => ({ type: WORDS.FAILURE, error }),
}
