//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import configureStore from 'models/store'

import GroupSelect from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={configureStore()}>
    <GroupSelect />
  </Provider>
)

//-----------  Tests  -----------//

describe('<GroupSelect />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
