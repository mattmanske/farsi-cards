//-----------  Imports  -----------//

import { WORDS } from './actions'

//-----------  Definitions  -----------//

export const initialState = {
  data      : [],
  error     : null,
  isLoading : false,
  hasLoaded : false,
}

//-----------  Reducers  -----------//

export default function wordsReducer(state = initialState, action){
  const { data, error } = action

  switch (action.type){

    case WORDS.REQUEST:
      return { ...state, isLoading: true }

    case WORDS.SUCCESS:
      return { ...initialState, data, hasLoaded: true }

    case WORDS.FAILURE:
      return { ...initialState, error }

    default:
      return state
  }
}
