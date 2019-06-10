//-----------  Imports  -----------//

import { call, put }          from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import { groupsActions, sagaActions } from '../actions'
import { requestGroupsSaga }         from '../sagas'
import { requestGroups }             from '../api'

//-----------  Definitions  -----------//

const groups = requestGroups()

//-----------  Saga Tests  -----------//

describe('Groups Model: Requst Saga', () => {
  const generator = cloneableGenerator(requestGroupsSaga)(groupsActions.request())

  test('should request data', () => {
    expect(generator.next().value).toEqual(call(requestGroups))
  })

  test('and trigger a success response action', () => {
    const clone = generator.clone()
    expect(clone.next(groups).value).toEqual(put(sagaActions.success()))
  })

  test('and a failure response action', () => {
    const clone = generator.clone()
    expect(clone.throw().value).toEqual(put(sagaActions.failure()))
  })
})
