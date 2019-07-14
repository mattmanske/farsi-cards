//-----------  Imports  -----------//

import Styled     from './styles'

import React      from 'react'
import PropTypes  from 'prop-types'

import Elements   from 'components/PageElements'
import ReviewCard from 'components/ReviewCard'

//-----------  Component  -----------//

class ReviewRoute extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { nextWord, currentWord, onCompletion } = this.props

    return (
      <Styled.ReviewRoute title='Review Route'>
        <Styled.CardWrapper>
            {/* {nextWord &&
                <ReviewCard word={nextWord} />
            } */}
            <ReviewCard word={nextWord} onCompletion={onCompletion} />
        </Styled.CardWrapper>
      </Styled.ReviewRoute>
    )
  }
}

//-----------  Type Definitions  -----------//

ReviewRoute.propTypes = {
  nextWord     : PropTypes.object,
  currentWord  : PropTypes.object,
  onCompletion : PropTypes.func.isRequired,
}

//-----------  Export  -----------//

export default ReviewRoute
