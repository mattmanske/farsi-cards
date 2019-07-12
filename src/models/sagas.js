//-----------  Imports  -----------//

import { all }        from 'redux-saga/effects'
import formActionSaga from 'redux-form-saga'

import wordsSagas     from 'models/words/sagas'
import verbsSagas     from 'models/verbs/sagas'
import groupsSagas    from 'models/groups/sagas'
import reviewSagas    from 'models/review/sagas'

//-----------  Exports  -----------//

export default function* rootSaga(){
  yield all([
    wordsSagas(),
    verbsSagas(),
    groupsSagas(),
    reviewSagas(),
    formActionSaga(),
  ])
}
