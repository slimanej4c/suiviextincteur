import { createStore } from 'redux'
import {  applyMiddleware } from 'redux';
import logger from 'redux-logger'
import {thunk} from "redux-thunk"
//import { createLogger } from "redux-logger";
import rootReducer from './rootReducer'
console.log('store')
//const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

export default store
