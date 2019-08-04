//-----------  Imports  -----------//

import { connect }        from 'react-redux'

import ReviewRoute        from './ReviewRoute'
import { reviewActions }  from 'models/review/actions'
import { reviewSelector } from 'models/review/selectors'

//-----------  Redux Maps  -----------//

const mapState = (state) => {
    return { ...reviewSelector(state) }
}

const mapDispatch = (dispatch) => ({
    requestReview: () => dispatch(reviewActions.request())
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(ReviewRoute)
