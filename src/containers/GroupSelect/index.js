//-----------  Imports  -----------//

import { connect }               from 'react-redux'

import GroupSelect               from './GroupSelect'

import { groupsActions }         from 'models/groups/actions'
import { groupsOptionsSelector } from 'models/groups/selectors'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  groups: groupsOptionsSelector(state),
})

const mapDispatch = (dispatch) => ({
  onCreate: (title) => { console.log(title); return dispatch(groupsActions.create({ title })) }
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(GroupSelect)
