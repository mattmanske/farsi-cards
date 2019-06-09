//-----------  Imports  -----------//

import { VERBS } from '../actions'
import verbsReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Verbs Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = verbsReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = verbsReducer(undefined, { type: VERBS.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
