//-----------  Imports  -----------//

import { call, put }                 from 'redux-saga/effects'
import { cloneableGenerator }        from 'redux-saga/utils'

import { wordsActions, sagaActions } from '../actions'
import { requestWordsSaga }          from '../sagas'
import { requestWords }              from '../api'

//-----------  Definitions  -----------//

const words = requestWords()

//-----------  Saga Tests  -----------//

describe('Words Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestWordsSaga)(wordsActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestWords))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(words).value).toEqual(put(sagaActions.success()))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
