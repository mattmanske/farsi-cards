//-----------  Imports  -----------//

import { REVIEW, reviewActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('Review Model: Actions', () => {
  it('should create an request action', () => {
    const action   = reviewActions.request()
    const expected = { type: REVIEW.REQUEST }

    expect(action).toEqual(expected)
  })
})
