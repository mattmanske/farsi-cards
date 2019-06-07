//-----------  Imports  -----------//

import { REQUESTS }                      from '../actions'
import requestsReducer, { initialState } from '../reducer'

//-----------  Helpers  -----------//

const busyState = {
  count : 2,
  error : false
}

//-----------  Reducer Tests  -----------//

describe('Requests Model: Reducer', () => {
  it('should return the initial state', () => {
    const action   = requestsReducer(undefined, {})
    const expected = initialState

    expect(action).toEqual(expected)
  })

  it('should handle an add action', () => {
    const action   = requestsReducer(undefined, { type: REQUESTS.ADD })
    const expected = { ...initialState, count: 1 }

    expect(action).toEqual(expected)
  })

  it('should handle a remove action', () => {
    const action   = requestsReducer(busyState, { type: REQUESTS.REMOVE })
    const expected = { ...initialState, count: 1 }

    expect(action).toEqual(expected)
  })
})
