//-----------  Imports  -----------//

import { all, put, call, fork, takeEvery }  from 'redux-saga/effects'

import RSF                                  from 'models/firebase'
import { APP }                              from 'models/app/actions'
import { GROUPS, sagaActions, formActions } from './actions'

//-----------  Definitions  -----------//

export const collection = 'groups'

//-----------  Transforms  -----------//

export function groupTransformer(group){
  const res = []
  group.forEach(doc => res.push({
    id: doc.id,
    ...doc.data()
  }))
  return res
}

//-----------  Sagas  -----------//

export function* syncGroupsSaga(){
  try {
    const refSync = yield fork(RSF.firestore.syncCollection,
      collection, {
        transform            : groupTransformer,
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

export function* createGroupSaga(action){
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


export function* updateGroupSaga(action){
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

export function* deleteGroupSaga(action){
  try {
    const { id, ...payload } = action

  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

//-----------  Watchers  -----------//

export default function* groupsSagas(){
  yield all([
    takeEvery(APP.INIT, syncGroupsSaga),
    takeEvery(formActions.create.REQUEST, createGroupSaga),
    takeEvery(formActions.update.REQUEST, updateGroupSaga),
    takeEvery(GROUPS.DELETE, deleteGroupSaga),
  ])
}
