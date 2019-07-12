//-----------  Imports  -----------//

import { call, put }                  from 'redux-saga/effects'
import { cloneableGenerator }         from 'redux-saga/utils'

import { reviewActions, sagaActions } from '../actions'
import { requestReviewSaga }          from '../sagas'
import { requestReview }              from '../api'

//-----------  Definitions  -----------//

const review = requestReview()

//-----------  Saga Tests  -----------//

describe('Review Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestReviewSaga)(reviewActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestReview))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(review).value).toEqual(put(sagaActions.success()))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
