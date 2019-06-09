//-----------  Imports  -----------//

import { call, put }          from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import { verbsActions, sagaActions } from '../actions'
import { requestVerbsSaga }         from '../sagas'
import { requestVerbs }             from '../api'

//-----------  Definitions  -----------//

const verbs = requestVerbs()

//-----------  Saga Tests  -----------//

describe('Verbs Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestVerbsSaga)(verbsActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestVerbs))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(verbs).value).toEqual(put(sagaActions.success()))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
