//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import PageElements from './index'

//-----------  Definitions  -----------//

const component = shallow(<PageElements/>)

//-----------  Tests  -----------//

describe('<PageElements />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
