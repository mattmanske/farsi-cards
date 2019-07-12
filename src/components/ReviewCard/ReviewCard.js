//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

class ReviewCard extends React.Component {

  //-----------  HTML Render  -----------//

  render(){
    const { word, onCompletion } = this.props

    return (
      <Styled.ReviewCard>

      </Styled.ReviewCard>
    )
  }
}

//-----------  Type Definitions  -----------//

ReviewCard.propTypes = {
    word         : PropTypes.object.isRequired,
    onCompletion : PropTypes.func,
}

//-----------  Export  -----------//

export default ReviewCard
