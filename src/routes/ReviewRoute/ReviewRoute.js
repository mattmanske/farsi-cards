//-----------  Imports  -----------//

import Styled     from './styles'

import React      from 'react'
import PropTypes  from 'prop-types'

import Elements   from 'components/PageElements'
import ReviewCard from 'containers/ReviewCard'

//-----------  Component  -----------//

class ReviewRoute extends React.Component {

    //-----------  Helpers  -----------//

    renderList = () => {
        const { index, words, results } = this.props

        const cards = words.map((word, idx) => {
            return <ReviewCard key={idx} word={word} order={(index - idx)} result={results[idx]} />
        })

        return cards.reverse()
    }

    //-----------  HTML Render  -----------//

    render() {
        const { index, words, onCompletion } = this.props

        return (
            <Styled.ReviewRoute title='Review Route'>
                <Styled.CardWrapper>
                    {this.renderList()}
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
