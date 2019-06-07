//-----------  Imports  -----------//

import { connect }    from 'react-redux'
import { withRouter } from 'react-router'

import AppHeader      from './AppHeader'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default withRouter(connect(mapState, mapDispatch)(AppHeader))
