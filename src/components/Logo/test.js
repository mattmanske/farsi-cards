//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import Logo from './index'

//-----------  Definitions  -----------//

const component = shallow(<Logo/>)

//-----------  Tests  -----------//

describe('<Logo />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
