import { combineReducers } from 'redux'
import  AuthReducer   from './auth/auth'

const rootReducer = combineReducers({
 
auth_reducer:AuthReducer,


})

export default rootReducer
