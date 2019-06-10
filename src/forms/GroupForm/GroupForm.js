//-----------  Imports  -----------//

import Styled               from './styles'

import React                from 'react'
import PropTypes            from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import FormField            from 'components/FormField'
import FormSubmit           from 'components/FormSubmit'
import { collection }       from 'models/groups/sagas'

//-----------  Validation  -----------//

const validate = ({ title, ...values }) => {
  let errors = {}

  if (!title)
    errors.title = 'Required'

  return errors
}

//-----------  Component  -----------//

const GroupForm = ({ handleSubmit, ...props }) => (
  <Styled.GroupForm noValidate onSubmit={handleSubmit}>
    {props.formTitle && <h4>{props.formTitle}</h4>}

    <Field required
      autoFocus
      type='text'
      name='title'
      label='Title'
      component={FormField}
    />
    <FormSubmit text={props.submitText || 'Submit'} {...props} />
  </Styled.GroupForm>
)


//-----------  Type Definitions  -----------//

GroupForm.propTypes = {
  onSubmit        : PropTypes.func,
  onSubmitSuccess : PropTypes.func,
}

//-----------  Export  -----------//

export default reduxForm({ form: collection, validate })(GroupForm)
