//-----------  Imports  -----------//

import { REVIEW } from './actions'

//-----------  Definitions  -----------//

export const initialState = {
  words     : [],
  index     : 0,
  results   : [],
  error     : null,
  isLoading : false,
}

//-----------  Reducers  -----------//

export default function reviewReducer(state = initialState, action){
  const { words, error } = action
  let results = []

  switch (action.type){

    case REVIEW.REQUEST:
      return { ...state, isLoading: true }

    case REVIEW.SUCCESS:
      return { ...initialState, words }

    case REVIEW.FAILURE:
      return { ...initialState, error }

    case REVIEW.CORRECT:
      results = [...state.results, true]
      return { ...state, results, index: state.index + 1 }

    case REVIEW.INCORRECT:
      results = [...state.results, false]
      return { ...state, results, index: state.index + 1 }

    default:
      return state
  }
}
