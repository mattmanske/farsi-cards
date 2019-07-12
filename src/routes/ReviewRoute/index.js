//-----------  Imports  -----------//

import { connect }                               from 'react-redux'

import ReviewRoute                               from './ReviewRoute'
import { reviewActions }                         from 'models/review/actions'
import { nextWordSelector, currentWordSelector } from 'models/review/selectors'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
    nextWord    : nextWordSelector(state),
    currentWord : currentWordSelector(state),
})

const mapDispatch = (dispatch) => ({
    onCompletion: (wordID, success) => dispatch(reviewActions.onCompletion(wordID, success)),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ReviewRoute)
