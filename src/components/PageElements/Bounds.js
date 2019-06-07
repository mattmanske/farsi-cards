//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const Bounds = ({ children, ...props }) => (
  <Styled.Bounds {...props} className='bounds'>
    {children}
  </Styled.Bounds>
)

//-----------  Type Definitions  -----------//

Bounds.propTypes = {
  children : PropTypes.node.isRequired,
  width    : PropTypes.oneOfType([
    PropTypes.oneOf(['max', 'large', 'block', 'medium', 'small', false]),
    PropTypes.number
  ]).isRequired
}

//-----------  Export  -----------//

export default Bounds
