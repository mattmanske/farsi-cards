//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import configureStore from 'models/store'

import AppWrapper     from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={configureStore()}>
    <AppWrapper />
  </Provider>
)

//-----------  Tests  -----------//

describe('<AppWrapper />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
