//-----------  Imports  -----------//

import { connect }             from 'react-redux'
import { withRouter }          from 'react-router-dom'

import { isDashboardSelector } from 'models/app/selectors'

import AppWrapper              from './AppWrapper'

//-----------  Redux Maps  -----------//

const mapState = (state, props) => ({
  isDashboard: isDashboardSelector(state, props)
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//
export default withRouter(connect(mapState, mapDispatch)(AppWrapper))
