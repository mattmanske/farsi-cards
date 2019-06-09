//-----------  Imports  -----------//

import { all }        from 'redux-saga/effects'
import formActionSaga from 'redux-form-saga'

import wordsSagas     from 'models/words/sagas'

//-----------  Exports  -----------//

export default function* rootSaga(){
  yield all([
    wordsSagas(),
    formActionSaga(),
  ])
}
