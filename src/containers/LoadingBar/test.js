//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import configureStore from 'models/store'

import LoadingBar from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={configureStore()}>
    <LoadingBar />
  </Provider>
)

//-----------  Tests  -----------//

describe('<LoadingBar />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
