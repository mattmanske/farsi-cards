//-----------  Imports  -----------//

import { connect }        from 'react-redux'

import AdminRoute         from './AdminRoute'

import { modalActions }   from 'models/modal/actions'
import { wordsActions }   from 'models/words/actions'
import { verbsActions }   from 'models/verbs/actions'
import { groupsActions }  from 'models/groups/actions'
import { wordsSelector }  from 'models/words/selectors'
import { verbsSelector }  from 'models/verbs/selectors'
import { groupsSelector } from 'models/groups/selectors'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  words  : wordsSelector(state),
  verbs  : verbsSelector(state),
  groups : groupsSelector(state),
})

const mapDispatch = (dispatch) => ({
  showModal   : (type, props, opts) => dispatch(modalActions.showModal(type, props, opts)),
  hideModal   : () => dispatch(modalActions.hideModal()),
  deleteWord  : (id) => dispatch(wordsActions.delete(id)),
  deleteVerb  : (id) => dispatch(verbsActions.delete(id)),
  deleteGroup : (id) => dispatch(groupsActions.delete(id)),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(AdminRoute)
