//-----------  Imports  -----------//

import { REVIEW } from './actions'

//-----------  Definitions  -----------//

export const initialState = {
  words   : [],
  index   : 0,
  results : [],
}

//-----------  Reducers  -----------//

export default function reviewReducer(state = initialState, action){
  const { data, error } = action
  let results = []

  switch (action.type){

    case REVIEW.REQUEST:
      return { ...state, isLoading: true }

    case REVIEW.SUCCESS:
      results = [1, ...state.results]
      return { ...initialState, results, index: state.index + 1 }

    case REVIEW.FAILURE:
      results = [0, ...state.results]
      return { ...initialState, results, index: state.index + 1 }

    default:
      return state
  }
}
