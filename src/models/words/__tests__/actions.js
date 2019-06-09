//-----------  Imports  -----------//

import { WORDS, wordsActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('Words Model: Actions', () => {
  it('should create an request action', () => {
    const action   = wordsActions.request()
    const expected = { type: WORDS.REQUEST }

    expect(action).toEqual(expected)
  })
})
