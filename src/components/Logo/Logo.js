//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const Logo = ({ inverted, ...props }) => {

  return (
    <Styled.Logo inverted={inverted}>
      Farsi Cards
    </Styled.Logo>
  )
}

//-----------  Type Definitions  -----------//

Logo.propTypes = {
  inverted: PropTypes.bool,
}

//-----------  Export  -----------//

export default Logo
