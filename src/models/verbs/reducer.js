//-----------  Imports  -----------//

import { VERBS } from './actions'

//-----------  Definitions  -----------//

export const initialState = {
  data      : [],
  error     : null,
  isLoading : false,
}

//-----------  Reducers  -----------//

export default function verbsReducer(state = initialState, action){
  const { data, error } = action

  switch (action.type){

    case VERBS.REQUEST:
      return { ...state, isLoading: true }

    case VERBS.SUCCESS:
      return { ...initialState, data }

    case VERBS.FAILURE:
      return { ...initialState, error }

    default:
      return state
  }
}
