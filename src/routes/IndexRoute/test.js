//-----------  Imports  -----------//

import React            from 'react'
import { mount }        from 'enzyme'
import { Provider }     from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import configureStore   from 'models/store'

import IndexRoute       from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={configureStore()}>
    <StaticRouter context={{}}>
      <IndexRoute />
    </StaticRouter>
  </Provider>
)

//-----------  Tests  -----------//

describe('<IndexRoute />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
