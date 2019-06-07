//-----------  Imports  -----------//

import get            from 'lodash/get'

import Styled         from './styles'

import React          from 'react'
import PropTypes      from 'prop-types'
import { withRouter } from 'react-router'

//-----------  Component  -----------//

const RouterWrapper = ({ children, isLoggedIn, ...props }) => {
  const isDashboard = isLoggedIn && get(props, 'location.pathname').includes('/dashboard')

  return (
    <Styled.RouterWrapper isDashboard={isDashboard}>
      {children}
    </Styled.RouterWrapper>
  )
}

//-----------  Type Definitions  -----------//

RouterWrapper.propTypes = {
  children   : PropTypes.node.isRequired,
  isLoggedIn : PropTypes.bool
}

//-----------  Export  -----------//

export default withRouter(RouterWrapper)
