//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

import Elements  from 'components/PageElements'

//-----------  Component  -----------//

class ReviewRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { nextWord, currentWord, onCompletion } = this.props

    return (
      <Elements.Page title='Review Route'>
        <Styled.CardSection>
          {nextWord &&
            <ReviewCard word={nextWord} />
          }
          <ReviewCard word={currentWord} onCompletion={onCompletion} />
        </Styled.CardSection>
      </Elements.Page>
    )
  }
}

//-----------  Type Definitions  -----------//

ReviewRoute.propTypes = {
  nextWord     : PropTypes.object,
  currentWord  : PropTypes.object.isRequired,
  onCompletion : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default ReviewRoute
