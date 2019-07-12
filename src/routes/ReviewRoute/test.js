//-----------  Imports  -----------//

import React            from 'react'
import { mount }        from 'enzyme'
import { Provider }     from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import configureStore   from 'models/store'

import ReviewRoute from './index'

//-----------  Definitions  -----------//

const context = {}

const container = mount(
  <Provider store={configureStore()}>
    <StaticRouter context={context}>
      <ReviewRoute />
    </StaticRouter>
  </Provider>
)

//-----------  Tests  -----------//

describe('<ReviewRoute />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
