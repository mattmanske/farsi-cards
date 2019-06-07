//-----------  Imports  -----------//

import { appName }               from 'utilities/constants'

import { createActionConstants } from '../sagas'

//-----------  Actions Tests  -----------//

describe('Utilities: Saga Helpers', () => {
  it('should create a constants object', () => {
    const action   = createActionConstants('TEST', ['EXTRA'])
    const expected = {
      REQUEST : `${appName}/TEST_REQUEST`,
      SUCCESS : `${appName}/TEST_SUCCESS`,
      FAILURE : `${appName}/TEST_FAILURE`,
      EXTRA   : `${appName}/TEST_EXTRA`
    }

    expect(action).toEqual(expected)
  })
})
