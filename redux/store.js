import { createStore } from 'redux'
import {  applyMiddleware } from 'redux';
import logger from 'redux-logger'
import {thunk} from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importez AsyncStorage depuis '@react-native-async-storage/async-storage'

//import { createLogger } from "redux-logger";
import rootReducer from './rootReducer'
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['LoggedIn'],
};
console.log('store')
//const logger = createLogger();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, logger)
)
const persistor = persistStore(store); 
persistor.persist();
export { store, persistor };