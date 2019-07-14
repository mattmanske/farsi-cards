//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

class ReviewCard extends React.Component {

  state = {
    flipped : false,
    loading : true,
  }

  //-----------  HTML Render  -----------//

  toggleFlipped = () => {
    this.setState({ flipped: !this.state.flipped })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { word, children, className, onCompletion } = this.props
    const { flipped, loading } = this.state

    const isFlipped = (loading && !word) || flipped;

    return (
      <Styled.ReviewCard className={className}>
        <Styled.CardWrapper flipped={isFlipped} onClick={this.toggleFlipped} onTouchEnd={this.toggleFlipped}>
          <Styled.FrontSide>
            <Styled.WordWrapper>
              {word && word.english}
            </Styled.WordWrapper>
          </Styled.FrontSide>
          <Styled.BackSide>
            <Styled.WordWrapper>
              <Styled.Farsi>{word && word.farsi}</Styled.Farsi>
              <br />
              <small><em>({word && word.phonetic})</em></small>
            </Styled.WordWrapper>
          </Styled.BackSide>
        </Styled.CardWrapper>
        <Styled.Status>
          {children}
        </Styled.Status>
      </Styled.ReviewCard>
    )
  }
}

//-----------  Type Definitions  -----------//

ReviewCard.propTypes = {
    word         : PropTypes.object,
    onCompletion : PropTypes.func,
}

//-----------  Export  -----------//

export default ReviewCard
