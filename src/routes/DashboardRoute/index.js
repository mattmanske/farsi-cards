//-----------  Imports  -----------//

import { connect }       from 'react-redux'

import DashboardRoute    from './DashboardRoute'

import { modalActions }  from 'models/modal/actions'
import { wordsActions }  from 'models/words/actions'
import { verbsActions }  from 'models/verbs/actions'
import { wordsSelector } from 'models/words/selectors'
import { verbsSelector } from 'models/verbs/selectors'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  words : wordsSelector(state),
  verbs : verbsSelector(state),
})

const mapDispatch = (dispatch) => ({
  showModal  : (type, props, opts) => dispatch(modalActions.showModal(type, props, opts)),
  hideModal  : () => dispatch(modalActions.hideModal()),
  deleteWord : (id) => dispatch(wordsActions.delete(id)),
  deleteVerb : (id) => dispatch(verbsActions.delete(id)),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(DashboardRoute)
