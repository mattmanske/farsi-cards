//-----------  Imports  -----------//

import { connect }           from 'react-redux'
import { formValueSelector } from 'redux-form'

import { formActions }       from 'models/words/actions'
import { collection }        from 'models/words/sagas'
import { imageSearchURL }    from 'utilities/formatters'

import WordForm              from './WordForm'

//-----------  Redux Maps  -----------//

const mapState = (state) => {
  const title = formValueSelector(collection)(state, 'english')

  return {
    searchURL: imageSearchURL(title || ''),
  }
}

const mapDispatch = (dispatch) => ({
  onSubmit: (...args) => (args[0].id) ? formActions.update(...args) : formActions.create(...args)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(WordForm)
