//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

const FieldWrapper = ({ title, children, ...props }) => (
  <Styled.FieldWrapper>
    {children}
  </Styled.FieldWrapper>
)

//-----------  Type Definitions  -----------//

FieldWrapper.propTypes = {
  title: PropTypes.string,
}

//-----------  Export  -----------//

export default FieldWrapper
