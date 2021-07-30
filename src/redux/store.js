import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import { watchFetchPizzas } from './sagas'

const saga = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(saga)
))

saga.run(watchFetchPizzas)

window.store = store
export default store