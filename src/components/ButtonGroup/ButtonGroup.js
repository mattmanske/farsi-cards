//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const ButtonGroup = ({ children, ...props }) => (
  <Styled.ButtonGroup {...props}>
    {React.Children.map(children, (button, index) =>
      React.cloneElement(button, { key: index, ...props }))
    }
  </Styled.ButtonGroup>
)

//-----------  Type Definitions  -----------//

ButtonGroup.propTypes = {
  to       : PropTypes.string,
  text     : PropTypes.string,
  bare     : PropTypes.bool,
  small    : PropTypes.bool,
  error    : PropTypes.bool,
  active   : PropTypes.bool,
  loading  : PropTypes.bool,
  disabled : PropTypes.bool,
  children : PropTypes.array.isRequired,
}

//-----------  Export  -----------//

export default ButtonGroup
