//-----------  Imports  -----------//

import { all, put, call, fork, takeEvery } from 'redux-saga/effects'

import RSF                                 from 'models/firebase'
import { APP }                             from 'models/app/actions'
import { WORDS, sagaActions, formActions } from './actions'

//-----------  Definitions  -----------//

export const collection = 'words'

//-----------  Transforms  -----------//

export function wordTransformer(words){
  const res = []
  words.forEach(doc => res.push({
    id: doc.id,
    ...doc.data()
  }))
  return res
}

//-----------  Sagas  -----------//

export function* syncWordsSaga(){
  try {
    // const collection = RSF.firestore.collection(sollection).where('account', '==', accountID)

    const refSync = yield fork(RSF.firestore.syncCollection,
      collection, {
        transform            : wordTransformer,
        successActionCreator : sagaActions.success,
        failureActionCreator : sagaActions.failure,
      }
    )

    yield take(APP.FAILURE)
    yield cancel(refSync)
    yield put(sagaActions.failure())
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

export function* createWordSaga(action){
  try {
    const { payload } = action

    const { id } = yield call(RSF.firestore.addDocument, collection, {
      createdAt: new Date(),
      updatedAt: new Date(),
      ...payload
    })

    yield put(formActions.create.success(id))
  } catch(error){
    yield put(formActions.create.failure(error))
  }
}

export function* updateWordSaga(action){
  try {
    const { id, ...payload } = action.payload

    yield call(RSF.firestore.updateDocument, `${collection}/${id}`, {
      updatedAt: new Date(),
      ...payload
    })

    yield put(formActions.update.success(id))
  } catch(error){
    yield put(formActions.update.failure(error))
  }
}

export function* deleteWordSaga(action){
  try {
    const { id, ...payload } = action

    yield call(RSF.firestore.deleteDocument, `${collection}/${id}`)
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

//-----------  Watchers  -----------//

export default function* wordsSagas(){
  yield all([
    takeEvery(APP.INIT, syncWordsSaga),
    takeEvery(formActions.create.REQUEST, createWordSaga),
    takeEvery(formActions.update.REQUEST, updateWordSaga),
    takeEvery(WORDS.DELETE, deleteWordSaga),
  ])
}
