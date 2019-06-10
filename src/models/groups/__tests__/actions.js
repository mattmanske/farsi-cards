//-----------  Imports  -----------//

import { GROUPS, groupsActions } from '../actions'

//-----------  Actions Tests  -----------//

describe('Groups Model: Actions', () => {
  it('should create an request action', () => {
    const action   = groupsActions.request()
    const expected = { type: GROUPS.REQUEST }

    expect(action).toEqual(expected)
  })
})
