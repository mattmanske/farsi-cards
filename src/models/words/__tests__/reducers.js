//-----------  Imports  -----------//

import { WORDS }                      from '../actions'
import wordsReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Words Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = wordsReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = wordsReducer(undefined, { type: WORDS.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
