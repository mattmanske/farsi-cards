//-----------  Imports  -----------//

import { all }        from 'redux-saga/effects'
import formActionSaga from 'redux-form-saga'

import wordsSagas     from 'models/words/sagas'
import verbsSagas     from 'models/verbs/sagas'

//-----------  Exports  -----------//

export default function* rootSaga(){
  yield all([
    wordsSagas(),
    verbsSagas(),
    formActionSaga(),
  ])
}
