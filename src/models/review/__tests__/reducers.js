//-----------  Imports  -----------//

import { REVIEW }                      from '../actions'
import reviewReducer, { initialState } from '../reducer'

//-----------  Reducer Tests  -----------//

describe('Review Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = reviewReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle a request action', () => {
    const action   = reviewReducer(undefined, { type: REVIEW.REQUEST })
    const expected = { ...initialState, isLoading: true }

    expect(action).toEqual(expected)
  })
})
