//-----------  Imports  -----------//

import React        from 'react'
import { Route,
         Switch,
         Redirect } from 'react-router-dom'

import IndexRoute   from 'routes/IndexRoute'

//-----------  Router Component  -----------//

export default () => (
  <Switch>
    <Route path='/' component={IndexRoute} exact />
    <Redirect from='/*' to='/' />
  </Switch>
)
