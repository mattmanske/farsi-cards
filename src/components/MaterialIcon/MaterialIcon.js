//-----------  Imports  -----------//

import Block     from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const MaterialIcon = ({ icon, onClick, ...props }) => {

  return (
    <Block.Elem onClick={onClick} { ...props }>
      {icon}
    </Block.Elem>
  )
}

//-----------  Prop Types  -----------//

MaterialIcon.propTypes = {
  icon    : PropTypes.string.isRequired,
  onClick : PropTypes.func,
}

//-----------  Export  -----------//

export default MaterialIcon
