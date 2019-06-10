//-----------  Imports  -----------//

import { combineReducers }        from 'redux'
import { reducer as formReducer } from 'redux-form'

import requestsReducer            from 'models/requests/reducer'
import modalReducer               from 'models/modal/reducer'
import wordsReducer               from 'models/words/reducer'
import verbsReducer               from 'models/verbs/reducer'
import groupsReducer              from 'models/groups/reducer'

//-----------  Exports  -----------//

export default function createReducers(){
  return combineReducers({
    form     : formReducer,
    words    : wordsReducer,
    modal    : modalReducer,
    verbs    : verbsReducer,
    groups   : groupsReducer,
    requests : requestsReducer,
  })
}
