//-----------  Imports  -----------//

import Styled       from './styles'

import React        from 'react'
import PropTypes    from 'prop-types'

import Button       from 'components/Button'
import Elements     from 'components/PageElements'
import MaterialIcon from 'components/MaterialIcon'

//-----------  Component  -----------//

class DashboardRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  wordModal = (word = {}) => {
    const { showModal, hideModal } = this.props

    showModal('WORD_FORM', {
      formTitle       : (word.id ? 'Edit Word' : 'Add Word'),
      submitText      : (word.id ? 'Update' : 'Add'),
      initialValues   : word,
      onSubmitSuccess : hideModal,
    }, { size: 'sm' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { words } = this.props

    return (
      <Elements.Page title='Dashboard Route'>
        <Elements.Section>
          {words.map(word => (
            <div key={word.id}  onClick={() => this.wordModal(word)}>
              <span>{word.english} • {word.phonetic} • {word.farsi}</span>
              <MaterialIcon icon='edit' />
            </div>
          ))}
          <Button onClick={() => this.wordModal()}>
            Add Word
            <MaterialIcon icon='add' />
          </Button>
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
