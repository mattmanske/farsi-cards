//-----------  Imports  -----------//

import { createActionConstants } from 'utilities/sagas'

//-----------  Definitions  -----------//

export const REVIEW = createActionConstants('REVIEW', ['START', 'CORRECT', 'INCORRECT']);

//-----------  Review Actions  -----------//

export const reviewActions = {
  request   : (query) => ({ type : REVIEW.REQUEST, query }),
  correct   : ()      => ({ type : REVIEW.CORRECT }),
  incorrect : ()      => ({ type : REVIEW.INCORRECT }),
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success : (words) => ({ type : REVIEW.SUCCESS, words }),
  failure : (error) => ({ type : REVIEW.FAILURE, error }),
}
