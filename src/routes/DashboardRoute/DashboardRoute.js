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

  //-----------  Word Event Handlers  -----------//

  wordModal = (word = {}) => {
    const { showModal, hideModal } = this.props

    showModal('WORD_FORM', {
      formTitle       : (word.id ? 'Edit Word' : 'Add New Word'),
      submitText      : (word.id ? 'Update' : 'Save'),
      initialValues   : word,
      onSubmitSuccess : hideModal,
    }, { size: 'rg' })
  }

  deleteWord = (word) => {
    // if (window.confirm('Are you sure you want to delete this word?'))
      return this.props.deleteWord(word.id)
  }

  //-----------  Verb Event Handlers  -----------//

  verbModal = (verb = {}) => {
    const { showModal, hideModal } = this.props

    showModal('VERB_FORM', {
      formTitle       : (verb.id ? 'Edit Verb' : 'Add New Verb'),
      submitText      : (verb.id ? 'Update' : 'Save'),
      initialValues   : verb,
      onSubmitSuccess : hideModal,
    }, { size: 'rg' })
  }

  deleteVerb = (verb) => {
    // if (window.confirm('Are you sure you want to delete this word?'))
      return this.props.deleteVerb(verb.id)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { words, verbs } = this.props

    console.log(verbs);

    return (
      <Elements.Page title='Dashboard Route'>
        <Elements.Section>
          {words.map(word => (
            <div key={word.id}>
              <span>{word.english} • {word.phonetic} • {word.farsi}</span>
              <MaterialIcon icon='edit' onClick={() => this.wordModal(word)} />
              <MaterialIcon icon='delete' onClick={() => this.deleteWord(word)} />
            </div>
          ))}

          {verbs.map(verb => (
            <div key={verb.id}>
              <span>{verb.infinitive.english} • {verb.infinitive.phonetic} • {verb.infinitive.farsi}</span>
              <MaterialIcon icon='edit' onClick={() => this.verbModal(verb)} />
              <MaterialIcon icon='delete' onClick={() => this.deleteVerb(verb)} />
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
  words      : PropTypes.array.isRequired,
  verbs      : PropTypes.array.isRequired,
  showModal  : PropTypes.func.isRequired,
  hideModal  : PropTypes.func.isRequired,
  deleteWord : PropTypes.func.isRequired,
  deleteVerb : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default DashboardRoute
