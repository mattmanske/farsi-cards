//-----------  Imports  -----------//

import React          from 'react'
import { mount }      from 'enzyme'
import { Provider }   from 'react-redux'

import configureStore from 'models/store'

import WordForm from './index'

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={configureStore()}>
    <WordForm />
  </Provider>
)

//-----------  Tests  -----------//

describe('<WordForm />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1)
  })
})
