//-----------  Imports  -----------//

import React            from 'react'
import { mount }        from 'enzyme'
import { Provider }     from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import configureStore   from 'models/store'

import GroupRoute from './index'

//-----------  Definitions  -----------//

const context = {}

const container = mount(
  <Provider store={configureStore()}>
    <StaticRouter context={context}>
      <GroupRoute />
    </StaticRouter>
  </Provider>
)

//-----------  Tests  -----------//

describe('<GroupRoute />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
