//-----------  Imports  -----------//

import React          from 'react'
import { Route,
         Switch,
         Redirect }   from 'react-router-dom'

import IndexRoute     from 'routes/IndexRoute'
import DashboardRoute from 'routes/DashboardRoute'

//-----------  Router Component  -----------//

export default () => (
  <Switch>
    <Route path='/' component={IndexRoute} exact />
    <Route path='/dashboard' component={DashboardRoute} exact />
    <Redirect from='/*' to='/' />
  </Switch>
)
