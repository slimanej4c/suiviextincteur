import { combineReducers } from 'redux'
import  AuthReducer   from './auth/auth'
import  menuReducer   from './diver/menu'

import AddProjectreducer   from './add_project/add_project'

const rootReducer = combineReducers({
 
auth_reducer:AuthReducer,
menu_reducer:menuReducer,
add_project_reducer :AddProjectreducer ,


})

export default rootReducer
