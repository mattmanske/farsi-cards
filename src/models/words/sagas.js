//-----------  Imports  -----------//

import { all, put, call, fork, takeEvery } from 'redux-saga/effects'

import RSF, { firestore }                  from 'models/firebase'
import { WORDS, sagaActions, formActions } from './actions'
import { addWordToGroup }                  from 'models/groups/sagas'

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

export function* requestWordsSaga(action){
  try {
    const { groups } = action.query;

    const query = firestore.collection(collection)

    groups.forEach((groupID) => base.where('groups', 'includes', groupID))

    const refs = yield fork(RSF.firestore.getCollection, query);
    const data = wordTransformer(refs)

    yield put(sagaActions.success(data))
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

    yield all(payload.groups.map((groupID) => call(addWordToGroup, id, groupID)))

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
    takeEvery(WORDS.REQUEST, requestWordsSaga),
    takeEvery(formActions.create.REQUEST, createWordSaga),
    takeEvery(formActions.update.REQUEST, updateWordSaga),
    takeEvery(WORDS.DELETE, deleteWordSaga),
  ])
}
