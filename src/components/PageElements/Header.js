//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const Header = ({ title, subtitle, children, ...props }) => (
  <Styled.Header {...props}>
    <div>
      <h3>{title}</h3>
      <h6>{subtitle || ' '}</h6>
    </div>
    {children && (
      <div>
        {children}
      </div>
    )}
  </Styled.Header>
)

//-----------  Type Definitions  -----------//

Header.propTypes = {
  title    : PropTypes.string,
  subtitle : PropTypes.node,
  children : PropTypes.node,
}

//-----------  Export  -----------//

export default Header
