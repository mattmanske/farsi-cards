//-----------  Imports  -----------//

import { connect }                                       from 'react-redux'

import ReviewRoute                                       from './ReviewRoute'
import { reviewActions }                                 from 'models/review/actions'
import { wordsSelector, indexSelector, resultsSortedSelector } from 'models/review/selectors'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
    index   : indexSelector(state),
    words   : wordsSelector(state),
    results : resultsSortedSelector(state),
})

const mapDispatch = (dispatch) => ({
    onCompletion: (wordID, success) => dispatch(reviewActions.onCompletion(wordID, success)),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ReviewRoute)
