//-----------  Imports  -----------//

import { REVIEW } from './actions'

//-----------  Definitions  -----------//

export const initialState = {
  words : [],
  index : 0,
}

//-----------  Reducers  -----------//

export default function reviewReducer(state = initialState, action){
  const { data, error } = action

  switch (action.type){

    case REVIEW.REQUEST:
      return { ...state, isLoading: true }

    case REVIEW.SUCCESS:
      return { ...initialState, data }

    case REVIEW.FAILURE:
      return { ...initialState, error }

    default:
      return state
  }
}
