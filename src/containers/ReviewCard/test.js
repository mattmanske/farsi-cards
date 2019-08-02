//-----------  Imports  -----------//

import React       from 'react'
import { shallow } from 'enzyme'

import ReviewCard from './index'

//-----------  Definitions  -----------//

const component = shallow(<ReviewCard/>)

//-----------  Tests  -----------//

describe('<ReviewCard />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })
})
