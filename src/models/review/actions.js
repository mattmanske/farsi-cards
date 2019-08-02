//-----------  Imports  -----------//

import { createActionConstants } from 'utilities/sagas'

//-----------  Definitions  -----------//

export const REVIEW = createActionConstants('REVIEW', ['SUCCESS', 'FAILURE']);

//-----------  Review Actions  -----------//

export const reviewActions = {
  request: () => ({ type: REVIEW.REQUEST }),
  success: () => ({ type: REVIEW.SUCCESS }),
  failure: () => ({ type: REVIEW.FAILURE }),
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => ({ type: REVIEW.SUCCESS, data }),
  failure: (error) => ({ type: REVIEW.FAILURE, error }),
}
