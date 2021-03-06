//-----------  Imports  -----------//

import { GROUPS } from './actions'

//-----------  Definitions  -----------//

export const initialState = {
  data      : [],
  error     : null,
  isLoading : false,
}

//-----------  Reducers  -----------//

export default function groupsReducer(state = initialState, action){
  const { data, error } = action

  switch (action.type){

    case GROUPS.REQUEST:
      return { ...state, isLoading: true }

    case GROUPS.SUCCESS:
      return { ...initialState, data }

    case GROUPS.FAILURE:
      return { ...initialState, error }

    default:
      return state
  }
}
