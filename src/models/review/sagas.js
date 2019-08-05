//-----------  Imports  -----------//

import { all, put, take, select, takeEvery } from 'redux-saga/effects'
import { shuffle } from 'lodash'

import { REVIEW, sagaActions } from './actions'
import { reviewSelector } from './selectors'
import { loadedSelector, reverseWordsSelector } from 'models/words/selectors'
import { WORDS } from 'models/words/actions'

//-----------  Sagas  -----------//

export function* requestReviewSaga({ query }){
    try {
        const hasLoaded = yield select(loadedSelector)

        if (!hasLoaded) {
            yield take(WORDS.SUCCESS)
        }

        const words = yield select(reverseWordsSelector)

        yield put(sagaActions.success(shuffle(words).slice(0, 10)))
    } catch(error){
        yield put(sagaActions.failure(error))
    }
}

export function* checkReviewSaga(){
    try {
        const { words, results } = yield select(reviewSelector)

        if (words.length === results.length){
            console.log('DONE')
        }
    } catch(error){}
}

//-----------  Watchers  -----------//

export default function* reviewSagas(){
    yield all([
        takeEvery(REVIEW.REQUEST, requestReviewSaga),
        takeEvery([REVIEW.CORRECT, REVIEW.INCORRECT], checkReviewSaga),
    ])
}
