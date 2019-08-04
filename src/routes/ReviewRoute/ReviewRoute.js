//-----------  Imports  -----------//

import Styled      from './styles'

import React       from 'react'
import PropTypes   from 'prop-types'

import Elements    from 'components/PageElements'
import ReviewCard  from 'containers/ReviewCard'
import LoadingIcon from 'components/LoadingIcon'

//-----------  Component  -----------//

class ReviewRoute extends React.Component {

    componentDidMount() {
        this.props.requestReview()
    }

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
        const { error, isLoading } = this.props

        return (
            <Styled.ReviewRoute title='Review Route'>
                {isLoading ? (
                    <LoadingIcon fill='white' />
                ) : (
                    <Styled.CardWrapper>
                        {this.renderList()}
                    </Styled.CardWrapper>
                )}
            </Styled.ReviewRoute>
        )
    }
}

//-----------  Type Definitions  -----------//

ReviewRoute.propTypes = {
    words         : PropTypes.array,
    index         : PropTypes.number,
    results       : PropTypes.array,
    error         : PropTypes.any,
    isLoading     : PropTypes.bool,
    requestReview : PropTypes.func,
}

//-----------  Export  -----------//

export default ReviewRoute
