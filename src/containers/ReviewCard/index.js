//-----------  Imports  -----------//

import { connect }       from 'react-redux'

import ReviewCard        from './ReviewCard'

import { reviewActions } from 'models/review/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
    onCorrect: () => dispatch(reviewActions.correct()),
    onIncorrect: () => dispatch(reviewActions.incorrect()),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ReviewCard)
