//-----------  Imports  -----------//

import { connect }       from 'react-redux'

import ReviewCard        from './ReviewCard'

import { reviewActions } from 'models/review/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
    onSuccess: () => dispatch(reviewActions.success()),
    onFailure: () => dispatch(reviewActions.failure()),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ReviewCard)
