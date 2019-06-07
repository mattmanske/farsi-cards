//-----------  Imports  -----------//

import { combineReducers }        from 'redux'
import { reducer as formReducer } from 'redux-form'

import requestsReducer            from 'models/requests/reducer'

//-----------  Exports  -----------//

export default function createReducers(){
  return combineReducers({
    form     : formReducer,
    requests : requestsReducer,
  })
}
