//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import ButtonGroup from './index'

//-----------  Definitions  -----------//

const component = shallow(<ButtonGroup/>)

//-----------  Tests  -----------//

describe('<ButtonGroup />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
