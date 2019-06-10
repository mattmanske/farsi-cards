//-----------  Imports  -----------//

import Styled         from './styles'

import React          from 'react'
import PropTypes      from 'prop-types'

import GroupSelect    from 'containers/GroupSelect'
import { errorClass } from 'utilities/constants'

//-----------  Helpers  -----------//

function getInputTag(type, props){
  switch (type){
    case 'textarea':
      return (
        <textarea {...props} />
      )
    case 'group-select':
      return (
        <GroupSelect {...props} />
      )
    default:
      return (
        <input type={type} {...props} />
      )
  }
}

//-----------  Component  -----------//

const FormField = ({ type, meta, input, label, notes, append, warning, horizontal, ...props }) => {
  const id        = props.id || input.name
  const invalid   = !!(meta.touched && meta.error)
  const className = (invalid ? errorClass : undefined)

  return (
    <Styled.FormField isInvalid={invalid} horizontal={horizontal}>
      <Styled.FieldLabel htmlFor={id} isInvalid={invalid}>
        {label}
        {!!label && props.required && <sup>*</sup>}
        {notes && (
          <small dangerouslySetInnerHTML={{ __html: notes }} />
        )}
      </Styled.FieldLabel>

      <Styled.FieldWrapper isInvalid={invalid}>
        {getInputTag(type, { ...input, ...props, id, className })}

        <Styled.FieldError isActive={meta.active} isInvalid={invalid}>
          {invalid ? meta.error : 'Valid'}
        </Styled.FieldError>

        <Styled.WarningField isActive={!!warning && !isInvalid}>
          {warning}
        </Styled.WarningField>

        {append && (
          <Styled.Append>{append}</Styled.Append>
        )}
      </Styled.FieldWrapper>
    </Styled.FormField>
  )
}

//-----------  Type Definitions  -----------//

FormField.propTypes = {
  // type         : PropTypes.string.isRequired,
  // name         : PropTypes.string.isRequired,
  // placeholder  : PropTypes.string,
  // autoComplete : PropTypes.string,
  // horizontal   : PropTypes.bool
}

//-----------  Export  -----------//

export default FormField
