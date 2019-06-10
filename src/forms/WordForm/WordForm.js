//-----------  Imports  -----------//

import Styled               from './styles'

import React                from 'react'
import PropTypes            from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import Button               from 'components/Button'
import FormField            from 'components/FormField'
import FormSubmit           from 'components/FormSubmit'
import FieldWrapper         from 'components/FieldWrapper'
import { collection }       from 'models/words/sagas'

//-----------  Validation  -----------//

const validate = ({ farsi, groups, english, phonetic, ...values }) => {
  let errors = {}

  if (!farsi)
    errors.farsi = 'Required'

  if (!english)
    errors.english = 'Required'

  if (!phonetic)
    errors.phonetic = 'Required'

  if (!groups || !groups.length)
    errors.groups = 'Required'

  return errors
}

//-----------  Component  -----------//

const WordForm = ({ groups, searchURL, hideModal, handleSubmit, ...props }) => (
  <Styled.WordForm noValidate onSubmit={handleSubmit}>
    {props.formTitle && <h4>{props.formTitle}</h4>}

    <FieldWrapper>
      <Field required
        autoFocus
        type='text'
        name='english'
        label='English'
        component={FormField}
      />
      <Field required
        type='text'
        name='phonetic'
        label='Phonetic'
        component={FormField}
      />
      <Field required
        type='text'
        name='farsi'
        label='Farsi'
        component={FormField}
      />
    </FieldWrapper>
    <Field required
      type='group-select'
      name='groups'
      label='Groups'
      notes={`(must choose at least one)`}
      component={FormField}
    />
    <Field
      type='text'
      name='image'
      label='Image URL Link'
      notes={`(optional – <a href=${searchURL} target="_blank" disabled={!searchURL}>Google Search</a></small></label>)`}
      component={FormField}
    />
    <Styled.FormFooter>
      <Button onClick={hideModal} bare>Cancel</Button>
      <FormSubmit text={props.submitText || 'Submit'} {...props} />
    </Styled.FormFooter>
  </Styled.WordForm>
)

//-----------  Type Definitions  -----------//

WordForm.propTypes = {
  searchURL       : PropTypes.string.isRequired,
  hideModal       : PropTypes.func.isRequired,
  onSubmit        : PropTypes.func.isRequired,
  onSubmitSuccess : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default reduxForm({ form: collection, validate })(WordForm)
