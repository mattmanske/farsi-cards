//-----------  Imports  -----------//

import { createActionConstants } from 'utilities/sagas'

//-----------  Definitions  -----------//

export const REVIEW = createActionConstants('REVIEW')

//-----------  Review Actions  -----------//

export const reviewActions = {
  request: () => ({ type: REVIEW.REQUEST }),
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => ({ type: REVIEW.SUCCESS, data }),
  failure: (error) => ({ type: REVIEW.FAILURE, error }),
}
