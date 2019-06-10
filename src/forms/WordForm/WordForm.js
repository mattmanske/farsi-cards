//-----------  Imports  -----------//

import Styled               from './styles'

import React                from 'react'
import PropTypes            from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import FormField            from 'components/FormField'
import FormSubmit           from 'components/FormSubmit'
import { collection }       from 'models/words/sagas'

//-----------  Validation  -----------//

const validate = ({ farsi, english, phonetic, ...values }) => {
  let errors = {}

  if (!farsi)
    errors.farsi = 'Required'

  if (!english)
    errors.english = 'Required'

  if (!phonetic)
    errors.phonetic = 'Required'

  return errors
}

//-----------  Component  -----------//

const WordForm = ({ searchURL, handleSubmit, ...props }) => (
  <Styled.WordForm noValidate onSubmit={handleSubmit}>
    {props.formTitle && <h4>{props.formTitle}</h4>}

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
    <Field
      type='text'
      name='image'
      label='Image'
      component={FormField}
    />
    <small>
      Try this URL for images: <a href={searchURL} target='_blank' disabled={!searchURL}>Google Search</a>
    </small>
    <FormSubmit text={props.submitText || 'Submit'} {...props} />
  </Styled.WordForm>
)

//-----------  Type Definitions  -----------//

WordForm.propTypes = {
  searchURL       : PropTypes.string,
  onSubmit        : PropTypes.func,
  onSubmitSuccess : PropTypes.func,
}

//-----------  Export  -----------//

export default reduxForm({ form: collection, validate })(WordForm)
