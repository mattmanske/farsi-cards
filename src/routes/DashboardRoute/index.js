//-----------  Imports  -----------//

import { connect }       from 'react-redux'

import DashboardRoute    from './DashboardRoute'

import { wordsSelector } from 'models/words/selectors';
import { modalActions }  from 'models/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  words : wordsSelector(state),
})

const mapDispatch = (dispatch) => ({
  showModal: (type, props, opts) => dispatch(modalActions.showModal(type, props, opts)),
  hideModal: () => dispatch(modalActions.hideModal()),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(DashboardRoute)
