//-----------  Imports  -----------//

import { all, put, call, takeEvery } from 'redux-saga/effects'

import { requestReview } from './api'
import { REVIEW, sagaActions } from './actions'

//-----------  Sagas  -----------//

export function* requestReviewSaga(){
  try {
    const { data } = yield call(requestReview)
    yield put(sagaActions.success(data))
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

//-----------  Watchers  -----------//

export default function* reviewSagas(){
  yield all([
    takeEvery(REVIEW.REQUEST, requestReviewSaga),
  ])
}
