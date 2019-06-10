//-----------  Imports  -----------//

import { connect }                        from 'react-redux'

import GroupRoute                         from './GroupRoute'

import { wordsActions }                   from 'models/words/actions'
import { wordsSelector }                  from 'models/words/selectors'
import { groupSelector, routeIdSelector } from 'models/groups/selectors'

//-----------  Redux Maps  -----------//

const mapState = (state, ownProps) => ({
  id    : routeIdSelector(state, ownProps),
  words : wordsSelector(state),
  group : groupSelector(state, ownProps),
})

const mapDispatch = (dispatch) => ({
  requestWords: (id) => wordsActions.request({ groups: [id] })
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(GroupRoute)
