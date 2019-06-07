//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import RouterWrapper from './index'

//-----------  Definitions  -----------//

const component = shallow(<RouterWrapper/>)

//-----------  Tests  -----------//

describe('<RouterWrapper />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
