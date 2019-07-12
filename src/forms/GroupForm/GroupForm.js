//-----------  Imports  -----------//

import Styled               from './styles'

import React                from 'react'
import PropTypes            from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import Button               from 'components/Button'
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

const GroupForm = ({ hideModal, handleSubmit, ...props }) => (
  <Styled.GroupForm noValidate onSubmit={handleSubmit}>
    {props.formTitle && <h4>{props.formTitle}</h4>}

    <Field required
      autoFocus
      type='text'
      name='title'
      label='Title'
      component={FormField}
    />
    <Styled.FormFooter>
      <Button onClick={hideModal} bare>Cancel</Button>
      <FormSubmit text={props.submitText || 'Submit'} {...props} />
    </Styled.FormFooter>
  </Styled.GroupForm>
)


//-----------  Type Definitions  -----------//

GroupForm.propTypes = {
  hideModal       : PropTypes.func.isRequired,
  onSubmit        : PropTypes.func,
  onSubmitSuccess : PropTypes.func,
}

//-----------  Export  -----------//

export default reduxForm({ form: collection, validate })(GroupForm)
