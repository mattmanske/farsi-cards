//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import configureStore from 'models/store'

import GroupForm from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={configureStore()}>
    <GroupForm />
  </Provider>
)

//-----------  Tests  -----------//

describe('<GroupForm />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
