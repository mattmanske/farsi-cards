//-----------  Imports  -----------//

import Styled       from './styles'

import React        from 'react'
import PropTypes    from 'prop-types'

import Elements     from 'components/PageElements'
import MaterialIcon from 'components/MaterialIcon'

//-----------  Component  -----------//

class GroupRoute extends React.Component {

  state = {
    group: null
  }

  componentDidMount() {
    const { group, requestWords } = this.props

    if (group)
      this.props.requestWords(this.group)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { words, group } = this.props

    return (
      <Elements.Page title={group.title}>
        <Elements.Section>
          <h1>{group.title}</h1>
          {words.map(word => (
            <div key={word.id}>
              <span>{word.english} • {word.phonetic} • {word.farsi}</span>
              <MaterialIcon icon='edit' onClick={() => this.wordModal(word)} />
              <MaterialIcon icon='delete' onClick={() => this.deleteWord(word)} />
            </div>
          ))}
        </Elements.Section>
      </Elements.Page>
    )
  }
}

//-----------  Type Definitions  -----------//

GroupRoute.propTypes = {
  words        : PropTypes.array.isRequired,
  group        : PropTypes.object.isRequired,
  requestWords : PropTypes.func.isRequired
}

//-----------  Export  -----------//

export default GroupRoute
