import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers/index'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './saga/saga'

const sagaMiddleware = createSagaMiddleware()

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  withDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export { store }
