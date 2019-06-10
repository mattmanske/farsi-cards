//-----------  Imports  -----------//

import { pick }                             from 'lodash'

import { all, put, call, fork, takeEvery }  from 'redux-saga/effects'

import RSF                                  from 'models/firebase'
import { APP }                              from 'models/app/actions'
import { VERBS, sagaActions, formActions }  from './actions'
import { tenses, infinitive, conjugations } from '../../utilities/verbs';
import { collection as wordCollection }     from '../words/sagas';

//-----------  Definitions  -----------//

export const collection = 'verbs'

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

export function* syncVerbsSaga(){
  try {
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

export function* createVerbSaga(action){
  try {
    const data = JSON.parse(JSON.stringify(action.payload));

    const doc = yield call(RSF.firestore.addDocument, collection, {
      createdAt: new Date(),
      updatedAt: new Date(),
      ...pick(data, ['bases'])
    })

    data[infinitive] = yield call(createVerbWordSaga, doc, data[infinitive], infinitive);

    for (const tense of tenses) {
      for (const conjugation of conjugations) {
        data[tense][conjugation] = yield call(createVerbWordSaga, doc, data[tense][conjugation], tense, conjugation);
      }
    }

    yield call(RSF.firestore.updateDocument, `${collection}/${doc.id}`, data)

    yield put(formActions.create.success(doc.id))
  } catch(error){
    yield put(formActions.create.failure(error))
  }
}

export function* createVerbWordSaga(doc, data, tense, conjugation = null){
  try {
    const docRef = yield call(RSF.firestore.addDocument, wordCollection, {
      createdAt   : new Date(),
      updatedAt   : new Date(),
      conjugation : conjugation,
      tense       : tense,
      verb        : doc,
      ...data
    })

    return docRef
  } catch(error){
    yield put(formActions.create.failure(error))
  }
}

export function* updateVerbSaga(action){
  try {
    const { id, bases, ...payload } = action.payload

    yield call(RSF.firestore.updateDocument, `${collection}/${id}`, {
      updatedAt: new Date(),
      ...payload
    })

    yield put(formActions.update.success(id))
  } catch(error){
    yield put(formActions.update.failure(error))
  }
}

export function* deleteVerbSaga(action){
  try {
    const { id, ...payload } = action

    // yield call(RSF.firestore.deleteDocument, `${collection}/${id}`)
  } catch(error){
    yield put(sagaActions.failure(error))
  }
}

//-----------  Watchers  -----------//

export default function* verbsSagas(){
  yield all([
    // takeEvery(APP.INIT, syncVerbsSaga),
    takeEvery(formActions.create.REQUEST, createVerbSaga),
    takeEvery(formActions.update.REQUEST, updateVerbSaga),
    takeEvery(VERBS.DELETE, deleteVerbSaga),
  ])
}
