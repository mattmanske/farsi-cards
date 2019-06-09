
//-----------  Imports  -----------//

import 'babel-polyfill'
import 'styles/globals'

import React             from 'react'
import ReactDOM          from 'react-dom'
import { Provider }      from 'react-redux'
import { AppContainer }  from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import AppWrapper        from 'containers/AppWrapper'
import { appRoot }       from 'utilities/constants'
import appStore          from 'models/store'

//-----------  Definitions  -----------//

const rootElem = document.getElementById(appRoot)

//-----------  Rendering  -----------//

function renderApp(Component){
  return ReactDOM.render(
    <AppContainer>
      <Provider store={appStore}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>
  , rootElem)
}

renderApp(AppWrapper)

//-----------  Hot Module Replacement  -----------//

// Rerender application components when changes detected in development
if ('development' === process.env.NODE_ENV && module.hot){
  module.hot.accept('./containers/AppWrapper', () => {
    const NextApp = require('./containers/AppWrapper').default
    return renderApp(NextApp)
  })
}
