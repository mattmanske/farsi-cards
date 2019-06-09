//-----------  Imports  -----------//

import Styled       from './styles'

import React        from 'react'
import PropTypes    from 'prop-types'

import Button       from 'components/Button'
import Elements     from 'components/PageElements'
import ButtonGroup  from 'components/ButtonGroup'
import MaterialIcon from 'components/MaterialIcon'

//-----------  Component  -----------//

class DashboardRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  wordModal = (word = {}) => {
    const { showModal, hideModal } = this.props

    showModal('WORD_FORM', {
      formTitle       : (word.id ? 'Edit Word' : 'Add New Word'),
      submitText      : (word.id ? 'Update' : 'Save'),
      initialValues   : word,
      onSubmitSuccess : hideModal,
    }, { size: 'rg' })
  }

  verbModal = (verb = {}) => {
    const { showModal, hideModal } = this.props

    showModal('VERB_FORM', {
      formTitle       : (verb.id ? 'Edit Verb' : 'Add New Verb'),
      submitText      : (verb.id ? 'Update' : 'Save'),
      initialValues   : verb,
      onSubmitSuccess : hideModal,
    }, { size: 'rg' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { words, verbs } = this.props

    return (
      <Elements.Page title='Dashboard Route'>
        <Elements.Section>
          {words.map(word => (
            <div key={word.id}  onClick={() => this.wordModal(word)}>
              <span>{word.english} • {word.phonetic} • {word.farsi}</span>
              <MaterialIcon icon='edit' />
            </div>
          ))}
          <ButtonGroup>
            <Button icon='add' onClick={() => this.wordModal()}>
              Add Word
            </Button>
            <Button icon='add' onClick={() => this.verbModal()}>
              Add Verb
            </Button>
          </ButtonGroup>
        </Elements.Section>
      </Elements.Page>
    )
  }
}

//-----------  Type Definitions  -----------//

DashboardRoute.propTypes = {
  words     : PropTypes.array.isRequired,
  showModal : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default DashboardRoute
