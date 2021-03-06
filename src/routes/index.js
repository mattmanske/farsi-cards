//-----------  Imports  -----------//

import React        from 'react'
import { Route,
         Switch,
         Redirect } from 'react-router-dom'

import IndexRoute   from 'routes/IndexRoute'
import ReviewRoute  from 'routes/ReviewRoute'
import AdminRoute   from 'routes/AdminRoute'
import GroupRoute   from 'routes/GroupRoute'

//-----------  Router Component  -----------//

export default () => (
  <Switch>
    <Route path='/' component={IndexRoute} exact />
    <Route path='/review' component={ReviewRoute} />
    <Route path='/admin/:id' component={GroupRoute} />
    <Route path='/admin' component={AdminRoute} />
    <Redirect from='/*' to='/' />
  </Switch>
)
