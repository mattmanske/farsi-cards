//-----------  Imports  -----------//

import Styled      from './styles'

import React       from 'react'
import PropTypes   from 'prop-types'
import { NavLink } from 'react-router-dom'

import Bounds      from 'components/PageElements/Bounds'

//-----------  Component  -----------//

const AppFooter = (props) => (
  <Styled.AppFooter>
    <Bounds width='max'>
      <small>Copyright 2019 • Manske LLC</small>

      <Styled.Navigation>
        <NavLink to='/dashboard'>Dashboard</NavLink>
      </Styled.Navigation>
    </Bounds>
  </Styled.AppFooter>

)

//-----------  Type Definitions  -----------//

AppFooter.propTypes = {}

//-----------  Export  -----------//

export default AppFooter
