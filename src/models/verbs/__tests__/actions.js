//-----------  Imports  -----------//

import { VERBS, verbsActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('Verbs Model: Actions', () => {
  it('should create an request action', () => {
    const action   = verbsActions.request()
    const expected = { type: VERBS.REQUEST }

    expect(action).toEqual(expected)
  })
})
