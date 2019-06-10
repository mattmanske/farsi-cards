//-----------  Imports  -----------//

import { get }                    from 'lodash'

import { connect }                from 'react-redux'
import { formValueSelector }      from 'redux-form'

import { formActions }            from 'models/verbs/actions'
import { collection }             from 'models/verbs/sagas'
import { getConjugationDefaults } from 'utilities/verbs'

import VerbForm                   from './VerbForm'

//-----------  Redux Maps  -----------//

const mapState = (state) => {
  const bases = formValueSelector(collection)(state, 'bases');

  return {
    initialValues: {
      present    : getConjugationDefaults(get(bases, 'present', {})),
      simplePast : getConjugationDefaults(get(bases, 'simplePast', {})),
    },
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
  }
}

const mapDispatch = (dispatch) => ({
  onSubmit: (...args) => (args[0].id) ? formActions.update(...args) : formActions.create(...args)
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(VerbForm)
