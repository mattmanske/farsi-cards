//-----------  Imports  -----------//

import Styled         from './styles'

import React          from 'react'
import PropTypes      from 'prop-types'

import { errorClass } from 'utilities/constants'

import Button         from 'components/Button'

//-----------  Definitions  -----------//

function findState({ submitting, submitSucceeded, submitFailed }){
  if (submitting)      return 'loading'
  if (submitFailed)    return 'error'
  if (submitSucceeded) return 'success'
  return null
}

function highlightError(){
  setTimeout(() => {
    if (document.getElementsByClassName(errorClass)[0])
      (document.getElementsByClassName(errorClass)[0]).focus()
  }, 10)
}

//-----------  Component  -----------//

class FormSubmit extends React.Component {

  state = {
    submitState: null
  }

  shouldComponentUpdate(nextProps, nextState){
    const isDirty     = (this.props.pristine != nextProps.pristine)
    const isDifferent = (this.state.submitState != nextState.submitState)
    const isSucceeded = (this.props.submitSucceeded != nextProps.submitSucceeded)
    const canChange   = (this.props.canReset) ? true : ('success' != this.state.submitState)
    const textChange  = (this.props.text != nextProps.text)
    const childChange = (this.props.children != nextProps.children)

    if (!this.props.submitFailed && nextProps.submitFailed)
      highlightError()

    if (nextState.submitState == null && nextProps.submitting) return false

    return (isDirty || isSucceeded || (isDifferent && canChange) || textChange || childChange)
  }

  componentWillReceiveProps(nextProps){
    const propsChange = (this.props.submitting != nextProps.submitting)
                        || (this.props.submitFailed != nextProps.submitFailed)
                        || (this.props.submitSucceeded != nextProps.submitSucceeded)

    if (propsChange){
      const nextState = findState(nextProps)
      clearTimeout(this.canReset)

      if ('loading' == nextState)
        this.setState({ submitState: nextState }, )
      if ('error' == nextState)
        this.setState({ submitState: nextState }, this.canResetState)
      else if ('loading' == this.state.submitState && 'success' == nextState)
        this.canReset = setTimeout(() => this.setState({ submitState: nextState }), 750)
      else if ('success' == this.state.submitState && this.props.canReset)
        this.canReset = setTimeout(() => this.setState({ submitState: null }), 2000)
      else
        this.setState({ submitState: nextState })
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.submitting && !this.props.submitting && this.props.submitFailed)
      highlightError()
  }

  componentWillUnmount(){
    // Clear any setTimeout calls that might happen after unmounting
    clearTimeout(this.canReset)
  }

  //-----------  Helpers  -----------//

  canResetState = () => {
    this.canReset = setTimeout(() => this.setState({ submitState: null }), 1200)
  }

  //-----------  Event Handlers  -----------//

  onSubmit = () => {
    this.canResetState

    if (this.props.submitFailed){
      this.setState({ submitState: 'error' })
      highlightError()
    }
  }

  //-----------  HTML Render  -----------//

  render(){
    const { text, canReset, disabled, children, horizontal, submitSucceeded, ...props } = this.props
    const { submitState } = this.state

    const hasError   = ('error' == submitState)
    const isLoading  = ('loading' == submitState)
    const isDisabled = disabled || isLoading || (!canReset && submitSucceeded)
    const buttonText = text || children || 'Submit'

    return (
      <Styled.FormSubmit horizontal={horizontal}>
        <Button
          type='submit'
          error={hasError}
          loading={isLoading}
          disabled={isDisabled}
          onClick={this.onSubmit}
          active
        >
          {buttonText}
        </Button>
      </Styled.FormSubmit>
    )
  }
}

//-----------  Type Definitions  -----------//

FormSubmit.propTypes = {

}

//-----------  Export  -----------//

export default FormSubmit
