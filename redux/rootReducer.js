import { combineReducers } from 'redux'
import auth_reducer   from './auth/auth'

const rootReducer = combineReducers({
 
auth_reducer:auth_reducer,


})

export default rootReducer
