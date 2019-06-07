//-----------  Imports  -----------//

import 'babel-polyfill'
import 'styles/globals'

import { appRoot }           from 'utilities/constants'

import React                 from 'react'
import ReactDOM              from 'react-dom'
import ReactDOMServer        from 'react-dom/server'
import { Provider }          from 'react-redux'
import { Helmet }            from 'react-helmet'
import { ServerStyleSheet,
         StyleSheetManager } from 'styled-components'
import { Route,
         StaticRouter,
         BrowserRouter }     from 'react-router-dom'

import AppWrapper            from 'containers/AppWrapper'
import withAnalytics         from 'components/Analytics'
import HtmlWrapper           from 'index'
import appStore              from 'models/store'

//-----------  Dynamic Rendering  -----------//

if (typeof document !== 'undefined'){
  const rootElem = document.getElementById(appRoot)

  ReactDOM.render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Route component={withAnalytics(AppWrapper)} />
      </BrowserRouter>
    </Provider>
  , rootElem)
}

//-----------  Static Rendering  -----------//

export default (locals, callback) => {
  const sheet = new ServerStyleSheet()

  // Render static markup based on location
  const html = ReactDOMServer.renderToStaticMarkup(
    <StyleSheetManager sheet={sheet.instance}>
      <Provider store={appStore}>
        <StaticRouter location={('/index.html' === locals.path) ? '/' : locals.path}>
          <AppWrapper />
        </StaticRouter>
      </Provider>
    </StyleSheetManager>
  )

  const assets = Object.keys(locals.webpackStats.compilation.assets)
  const meta   = Helmet.renderStatic()

  // Inject static assets
  const output = HtmlWrapper(html, meta, assets, sheet.getStyleTags())

  return callback(null, output)
}
