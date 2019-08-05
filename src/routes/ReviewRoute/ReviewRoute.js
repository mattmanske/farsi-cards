//-----------  Imports  -----------//

import Styled      from './styles'

import React       from 'react'
import PropTypes   from 'prop-types'

import Button      from 'components/Button'
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
        const { words, results, isLoading } = this.props

        const correct         = results.filter(Boolean)
        const percentCorrect  = !!results.length ? (correct.length / results.length) * 100 : 0
        const percentFinished = !!words.length ? (results.length / words.length) * 100 : 0

        return (
            <Styled.ReviewRoute title='Review Route'>
                {isLoading ? (
                    <LoadingIcon fill='white' />
                ) : (
                    <Styled.CardWrapper>
                        <Styled.Results>
                            <h1>{Math.round(percentCorrect)}%</h1>
                            <h6>Correct</h6>
                            <Button to="/">Done</Button>
                        </Styled.Results>
                        {this.renderList()}
                    </Styled.CardWrapper>
                )}

                <Styled.ProgressWrapper>
                    <Styled.ProgressBar width={Math.round(percentFinished)} />
                </Styled.ProgressWrapper>
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
