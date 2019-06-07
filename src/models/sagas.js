//-----------  Imports  -----------//

import { all }        from 'redux-saga/effects'
import formActionSaga from 'redux-form-saga'

//-----------  Exports  -----------//

export default function* rootSaga(){
  yield all([
    formActionSaga(),
  ])
}
