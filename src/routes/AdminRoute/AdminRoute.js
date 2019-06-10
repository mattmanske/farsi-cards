//-----------  Imports  -----------//

import Styled       from './styles'

import React        from 'react'
import PropTypes    from 'prop-types'

import Button       from 'components/Button'
import Elements     from 'components/PageElements'
import ButtonGroup  from 'components/ButtonGroup'
import MaterialIcon from 'components/MaterialIcon'

//-----------  Component  -----------//

class AdminRoute extends React.Component {

  //-----------  Word Event Handlers  -----------//

  wordModal = (word = {}) => {
    const { showModal, hideModal } = this.props

    showModal('WORD_FORM', {
      formTitle       : (word.id ? 'Edit Word' : 'Add New Word'),
      submitText      : (word.id ? 'Update' : 'Save'),
      initialValues   : word,
      onSubmitSuccess : hideModal,
    }, { size: 'md' })
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
    // if (window.confirm('Are you sure you want to delete this verb?'))
      return this.props.deleteVerb(verb.id)
  }

  //-----------  Group Event Handlers  -----------//

  groupModal = (group = {}) => {
    const { showModal, hideModal } = this.props

    showModal('GROUP_FORM', {
      formTitle       : (group.id ? 'Edit Group' : 'Add New Group'),
      submitText      : (group.id ? 'Update' : 'Save'),
      initialValues   : group,
      onSubmitSuccess : hideModal,
    }, { size: 'sm' })
  }

  deleteGroup = (group) => {
    // if (window.confirm('Are you sure you want to delete this group?'))
      return this.props.deleteGroup(group.id)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { words, verbs, groups } = this.props

    return (
      <Elements.Page title='Admin Dashboard'>
        <Elements.Section>
          {/* {words.map(word => (
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
          ))} */}

          <Button icon='add' onClick={() => this.wordModal()} small active>
            Add Word
          </Button>

          <Styled.GroupWrapper>
            {groups.map(group => (
              <Styled.Group key={group.id}>
                <Styled.Header to={`/admin/${group.id}`}>
                  <small>Group</small>
                  <h3>{group.title}</h3>
                </Styled.Header>
                <Styled.Actions>
                  <ButtonGroup small bare>
                    <Button text='Edit' onClick={() => this.groupModal(group)} />
                    <Button text='Delete' onClick={() => this.deleteGroup(group)} />
                  </ButtonGroup>
                </Styled.Actions>
              </Styled.Group>
            ))}

            <Styled.AddNew onClick={() => this.groupModal()}>
                <Styled.Center>
                  <MaterialIcon icon='create_new_folder' />
                  <h5>Create New Group</h5>
                </Styled.Center>
            </Styled.AddNew>
          </Styled.GroupWrapper>
        </Elements.Section>
      </Elements.Page>
    )
  }
}

//-----------  Type Definitions  -----------//

AdminRoute.propTypes = {
  words       : PropTypes.array.isRequired,
  verbs       : PropTypes.array.isRequired,
  groups      : PropTypes.array.isRequired,
  showModal   : PropTypes.func.isRequired,
  hideModal   : PropTypes.func.isRequired,
  deleteWord  : PropTypes.func.isRequired,
  deleteVerb  : PropTypes.func.isRequired,
  deleteGroup : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default AdminRoute
