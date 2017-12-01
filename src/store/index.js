import { createStore, applyMiddleware, compose } from 'redux'
// import { createStore } from 'redux'
// import { createStore } from 'redux-immutable'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import allSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const store =  createStore(
  rootReducer,
  compose(
    // applyMiddleware(sagaMiddleware,createLogger()),
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

sagaMiddleware.run(allSaga)

export default store
