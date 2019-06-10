//-----------  Imports  -----------//

import React        from 'react'
import { Route,
         Switch,
         Redirect } from 'react-router-dom'

import IndexRoute   from 'routes/IndexRoute'
import AdminRoute   from 'routes/AdminRoute'

//-----------  Router Component  -----------//

export default () => (
  <Switch>
    <Route path='/' component={IndexRoute} exact />
    <Route path='/admin' component={AdminRoute} exact />
    <Redirect from='/*' to='/' />
  </Switch>
)
