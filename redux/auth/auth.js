


  export const LOGOUT_REQUEST= 'LOGOUT_REQUEST'
  export const LOGOUT_SUCCESS= 'LOGOUT_SUCCESDS'
  export const LOGOUT_FAILURE= 'LOGOUT_FAILURE0'

  
  export const LOGIN_REQUEST= 'LOGIN_REQUEST'
  export const LOGIN_SUCCESS= 'LOGIN_SUCCESS'
  export const LOGIN_FAILURE= 'LOGIN_FAILURE'

  export const REGISTER_REQUEST= 'REGISTER_REQUEST'
  export const REGISTER_SUCCESS= 'REGISTER_SUCCESS'
  export const REGISTER_FAILURE= 'REGISTER_FAILURE'
  
  export const LOGIN_RESET= 'LOGIN_RESET'


  export const Logout_redux= (navigate) => async dispatch => {
   
   
  
  
  };

  export const Register_redux=(email,password,navigate)=> async dispatch=> {
  
  


  }


    
  
  
  export const ClearLogin_redux= () => {
  
    return (dispatch) => {
  
      dispatch(LoginReset())
  
    }}

    
  
  export const Login_redux = () => async dispatch => {
    dispatch(LoginRequest())
   console.log('login is pressed')
    }
  
    
    

  
  export const RegisterSuccess = (username) => {
    return {
      type: REGISTER_SUCCESS ,
      username_action2:username,
    
    
    }
  }  
  

export const RegisterFailure = (error) => {
    return {
      type: REGISTER_FAILURE ,
     
    }
  } 

export const RegisterRequest = () => {
    console.log('request ')
      return {
        type: REGISTER_REQUEST ,
       
      }
    }
  
  export const LoginRequest = () => {
  
      return {
        type: LOGIN_REQUEST ,
       
      }
    }
    
  
    export const LoginReset= () => {
      console.log('request ')
        return {
          type: LOGIN_RESET ,
     
         
        }
      }
      
  export const LoginSuccess = (username,password,navigate) => {
      return {
        type: LOGIN_SUCCESS ,
        username_action:username,
        navigate_action:navigate,
        set_password:password,
      }
    }  
    
  
  export const LoginFailure = (error) => {
      return {
        type: LOGIN_FAILURE ,
        set_login_error:error,
       
      }
    } 

  export const LogoutRequest = () => {
      console.log('request ')
        return {
          type: LOGOUT_REQUEST ,
         
        }
      }
      
    
  export const LogoutSuccess = (v) => {
        return {
          type: LOGOUT_SUCCESS ,
       
  
        }
      }  
      
    
  export const LogoutFailure = (error) => {
        return {
          type: LOGOUT_FAILURE ,
       
        }
      } 
    
    const initialState = {
      username: '',
      load_login:false,
      load_logout:'load logout ',
      load_register:false,
      success_register:false,
      error_login:'',
      change_navigate:false,
      useeffect:false,
      navigate:'',
      password:'',
    }
    
  
    const AuthReducer = (state = initialState, action) => {
      switch (action.type) {
        case LOGIN_REQUEST: return {
          ...state,
          load_login:true,
          load_logout:"is login",
          error_login:''
        
        }
        case LOGIN_SUCCESS: return {
          ...state,
          load_login:false,
          navigate:action.navigate_action,
          username:action.username_action,
          password:action.set_password,

        
        
        }
        case LOGIN_FAILURE: return {
          ...state,
          load_login:false,
          error_login:action.set_login_error,
        
        }
        case LOGIN_RESET: return {
          ...state,
         
     
        }
        case LOGOUT_REQUEST:
             
          return {
          ...state,
          load_logout:"is login"
          
        }
        case LOGOUT_SUCCESS: return {
          ...state, 
          load_logout:false,
   
          success_register:false,
    
        }
        case LOGOUT_FAILURE: return {
          ...state,
          load_logout:false

        }

        case REGISTER_REQUEST: return {
          ...state,
          load_register:true, 
 
        }
        case REGISTER_SUCCESS: return {
          ...state,
      
          username:action.username_action2,
          load_register:false,
          success_register:true,
        }
        case REGISTER_FAILURE: return {
          load_register:false,
          ...state,
         

        }

        default:{
          return {
          
            ...state
          }
        
        }
      }
    }
    
    export default AuthReducer
    