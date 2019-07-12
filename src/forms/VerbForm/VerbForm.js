//-----------  Imports  -----------//

import Styled                               from './styles'

import React                                from 'react'
import PropTypes                            from 'prop-types'
import { Field, reduxForm }                 from 'redux-form'
import { startCase }                        from 'lodash'

import Button                               from 'components/Button'
import FormField                            from 'components/FormField'
import FormSubmit                           from 'components/FormSubmit'
import FieldWrapper                         from 'components/FieldWrapper'
import { tenses, infinitive, conjugations } from 'utilities/verbs';
import { collection }                       from 'models/verbs/sagas'

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

class VerbForm extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { bases, handleSubmit, ...props } = this.props

    return (
      <Styled.VerbForm noValidate onSubmit={handleSubmit}>
        {props.formTitle && <h4>{props.formTitle}</h4>}

        <fieldset>
          <legend>{startCase(infinitive)}</legend>
          <FieldWrapper>
            <Field required
              autoFocus
              type='text'
              name={`${infinitive}.english`}
              label='English'
              component={FormField}
            />
            <Field required
              type='text'
              name={`${infinitive}.phonetic`}
              label='Phonetic'
              component={FormField}
            />
            <Field required
              type='text'
              name={`${infinitive}.farsi`}
              label='Farsi'
              component={FormField}
            />
          </FieldWrapper>
        </fieldset>

        {tenses.map((tense) => (
          <fieldset key={tense}>
            <legend>{startCase(tense)} Tense</legend>
            <FieldWrapper>
              <Field required
                autoFocus
                type='text'
                name={`bases.${tense}.english`}
                label='English'
                component={FormField}
              />
              <Field required
                type='text'
                name={`bases.${tense}.phonetic`}
                label='Phonetic Base'
                component={FormField}
              />
              <Field required
                type='text'
                name={`bases.${tense}.farsi`}
                label='Farsi Base'
                component={FormField}
              />
            </FieldWrapper>
            <label>Conjugations</label>
            <Styled.Conjugations>
              {conjugations.map((conjugation) => (
                <FieldWrapper key={conjugation} title={conjugation}>
                  <Field required
                    autoFocus
                    type='text'
                    name={`${tense}.${conjugation}.english`}
                    component={FormField}
                  />
                  <Field required
                    type='text'
                    name={`${tense}.${conjugation}.phonetic`}
                    component={FormField}
                  />
                  <Field required
                    type='text'
                    name={`${tense}.${conjugation}.farsi`}
                    component={FormField}
                  />
                </FieldWrapper>
              ))}
            </Styled.Conjugations>
          </fieldset>
        ))}
        <Styled.FormFooter>
          <Button onClick={hideModal} bare>Cancel</Button>
          <FormSubmit text={props.submitText || 'Submit'} {...props} />
        </Styled.FormFooter>
      </Styled.VerbForm>
    )
  }
}

//-----------  Type Definitions  -----------//

VerbForm.propTypes = {
  bases           : PropTypes.object,
  onSubmit        : PropTypes.func,
  onSubmitSuccess : PropTypes.func,
}

//-----------  Export  -----------//

export default reduxForm({ form: collection, validate })(VerbForm)
