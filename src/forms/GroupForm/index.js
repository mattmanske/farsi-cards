//-----------  Imports  -----------//

import { connect }      from 'react-redux'

import { formActions }  from 'models/groups/actions'
import { modalActions } from 'models/modal/actions'

import GroupForm        from './GroupForm'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  hideModal : () => dispatch(modalActions.hideModal()),
  onSubmit  : (...args) => (args[0].id) ? formActions.update(...args) : formActions.create(...args)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(GroupForm)
