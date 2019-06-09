//-----------  Imports  -----------//

import { MODAL } from './actions'

//-----------  Definitions  -----------//

const initialState = {
  child   : null,
  props   : {},
  options : {},
}

//-----------  Reducers  -----------//

function modalReducer(state = initialState, action){
  const { child, props, options } = action

  switch (action.type){

    case MODAL.SHOW:
      return { child, props: props || {}, options: options || {} }

    case MODAL.HIDE:
      return initialState

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default modalReducer
