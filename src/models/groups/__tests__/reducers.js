//-----------  Imports  -----------//

import { GROUPS } from '../actions'
import groupsReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Groups Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = groupsReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = groupsReducer(undefined, { type: GROUPS.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
