import { combineReducers } from 'redux'
import  AuthReducer   from './auth/auth'
import  menuReducer   from './diver/menu'

const rootReducer = combineReducers({
 
auth_reducer:AuthReducer,
menu_reducer:menuReducer,


})

export default rootReducer
