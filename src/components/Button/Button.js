//-----------  Imports  -----------//

import Styled       from './styles'

import React        from 'react'
import PropTypes    from 'prop-types'
import { Link }     from 'react-router-dom'

import LoadingIcon  from 'components/LoadingIcon'
import MaterialIcon from 'components/MaterialIcon'

//-----------  Component  -----------//

const Button = ({ text, icon, small, loading, children, ...props }) => {

  const tag = ('submit' === props.type) ? 'button' : (props.to) ? Link : 'span'

  props.onClick = !(props.disabled || loading)
    ? props.onClick
    : undefined

  if (loading)
    icon = <LoadingIcon />

  return (
    <Styled.Button small={small} tag={tag} className='btn' {...props}>
      <Styled.Interior small={small}>
        {loading ? (
          <Styled.Icon>
            <LoadingIcon />
          </Styled.Icon>
        ) : icon && (
          <Styled.Icon>
            <MaterialIcon icon={icon} />
          </Styled.Icon>
        )}
        <Styled.Text>
          {text || children}
        </Styled.Text>
      </Styled.Interior>
    </Styled.Button>
  )
}

//-----------  Type Definitions  -----------//

Button.propTypes = {
  to       : PropTypes.string,
  text     : PropTypes.string,
  href     : PropTypes.string,
  icon     : PropTypes.string,
  bare     : PropTypes.bool,
  small    : PropTypes.bool,
  error    : PropTypes.bool,
  active   : PropTypes.bool,
  loading  : PropTypes.bool,
  disabled : PropTypes.bool,
  children : PropTypes.node,
  onClick  : PropTypes.func,
  type     : PropTypes.string,
}

//-----------  Export  -----------//

export default Button
