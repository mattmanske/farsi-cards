//-----------  Imports  -----------//

import React            from 'react'
import { mount }        from 'enzyme'
import { Provider }     from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import configureStore   from 'models/store'

import AdminRoute       from './index'

//-----------  Definitions  -----------//

const context = {}

const container = mount(
  <Provider store={configureStore()}>
    <StaticRouter context={context}>
      <AdminRoute />
    </StaticRouter>
  </Provider>
)

//-----------  Tests  -----------//

describe('<AdminRoute />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
