//-----------  Imports  -----------//

import { createFormAction }      from 'redux-form-saga'
import { createActionConstants } from 'utilities/sagas'

//-----------  Definitions  -----------//

export const WORDS = createActionConstants('WORDS')

//-----------  Words Actions  -----------//

export const formActions = {
  create : createFormAction('WORD_CREATE'),
  update : createFormAction('WORD_UPDATE'),
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => ({ type: WORDS.SUCCESS, data }),
  failure: (error) => ({ type: WORDS.FAILURE, error }),
}
