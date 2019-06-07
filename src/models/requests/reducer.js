//-----------  Imports  -----------//

import { appName }  from 'utilities/constants'

import { REQUESTS } from './actions'

//-----------  Definitions  -----------//

export const initialState = {
  count : 0,
  error : false,
}

//-----------  Reducers  -----------//

export default function requestsReducer(state = initialState, action){
  const { count } = state

  if (RegExp(`${appName}\\/\\w*\\_REQUEST`).test(action.type))
    return { ...state, count: (count + 1) }

  if (RegExp(`${appName}\\/\\w*\\_SUCCESS`).test(action.type))
    return { ...state, count: ((1 > count) ? 0 : count - 1) }

  if (RegExp(`${appName}\\/\\w*\\_FAILURE`).test(action.type))
    return { ...state, error: true, count: ((1 > count) ? 0 : count - 1) }

  switch (action.type){

    case REQUESTS.ADD:
      return { ...state, count: (count + 1) }

    case REQUESTS.REMOVE:
      return { ...state, count: ((1 > count) ? 0 : count - 1) }

    default:
      return state
  }
}
