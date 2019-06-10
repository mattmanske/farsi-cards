//-----------  Imports  -----------//

import { connect }               from 'react-redux'

import GroupSelect               from './GroupSelect'

import { groupsOptionsSelector } from 'models/groups/selectors'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  groups: groupsOptionsSelector(state),
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(GroupSelect)
