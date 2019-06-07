//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import configureStore from 'models/store'

import AppHeader from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={configureStore()}>
    <AppHeader />
  </Provider>
)

//-----------  Tests  -----------//

describe('<AppHeader />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
