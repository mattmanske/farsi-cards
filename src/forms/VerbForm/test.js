//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import configureStore from 'models/store'

import VerbForm from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={configureStore()}>
    <VerbForm />
  </Provider>
)

//-----------  Tests  -----------//

describe('<VerbForm />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
