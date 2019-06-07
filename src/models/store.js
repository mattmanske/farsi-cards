//-----------  Imports  -----------//

import { compose,
         createStore,
         applyMiddleware }  from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga             from 'models/sagas'
import createReducers       from 'models/reducers'

//-----------  Definitions  -----------//

const sagaMiddleware = createSagaMiddleware()

// Connect to Redux Devtools (https://github.com/zalmoxisus/redux-devtools-extension)
const composeEnhancers = (...args) => {
  return (typeof window === 'object'
    && process.env.NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(...args)
      : compose(...args)
}

//-----------  Configuration  -----------//

function configureStore(initialState = {}){
  const rootReducer = createReducers()
  const enhancers   = composeEnhancers(applyMiddleware(sagaMiddleware))

  const store = createStore(rootReducer, initialState, enhancers)

  //-----------  Hot Module Replacement  -----------//

  // Rerender application state when changes detected in development
  if ('development' === process.env.NODE_ENV && module.hot){
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default()
      return store.replaceReducer(nextRootReducer)
    })
  }

  //-----------  Initialization  -----------//

  store.runSaga = sagaMiddleware.run(rootSaga)
  return store
}

//-----------  Exports  -----------//

export default configureStore()