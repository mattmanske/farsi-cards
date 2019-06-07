//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import configureStore from 'models/store'

import AppFooter      from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={configureStore()}>
    <AppFooter />
  </Provider>
)

//-----------  Tests  -----------//

describe('<AppFooter />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
