//-----------  Imports  -----------//

import { createActionConstants } from 'utilities/sagas'

//-----------  Definitions  -----------//

export const REVIEW = createActionConstants('REVIEW', ['CORRECT', 'INCORRECT', 'COMPLETED']);

//-----------  Review Actions  -----------//

export const reviewActions = {
  request   : (query) => ({ type: REVIEW.REQUEST, query }),
  correct   : ()      => ({ type: REVIEW.CORRECT }),
  incorrect : ()      => ({ type: REVIEW.INCORRECT }),
  completed : ()      => ({ type: REVIEW.COMPLETED }),
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success : (words) => ({ type: REVIEW.SUCCESS, words }),
  failure : (error) => ({ type: REVIEW.FAILURE, error }),
}
