


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



export const Logout_redux= () => async dispatch => {
 
  dispatch(LogoutSuccess ());


};

export const Register_redux=(email,password,navigate)=> async dispatch=> {




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


  

  export const Login_redux = (email,password) => async dispatch => {
    console.log('Login_redux .........',email,password)
    dispatch(LoginRequest())
    setTimeout(() => {
      dispatch(LoginSuccess ());
    }, 4000);
   
    }
    export const LoginRequest = () => {

      return {
        type: LOGIN_REQUEST ,
       
      }
    }
export const LoginSuccess = (username,password,navigate) => {
    return {
      type: LOGIN_SUCCESS ,
     
    }
  }  
  

export const LoginFailure = (error) => {
    return {
      type: LOGIN_FAILURE ,
     
     
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
   


    LoginLoading: false,
    LogoutLoading: false,
    LoggedIn: false,
  }
  

  const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          LoginLoading: true,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          LoginLoading: false,
          LoggedIn: true,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          LoginLoading: false,
          LoggedIn: false,
        };
      case LOGIN_RESET: return {
        ...state,
       
   
      }
      case LOGOUT_REQUEST:
           
        return {
        ...state,

        
      }
      case LOGOUT_SUCCESS: return {
        ...state, 
          LoginLoading: false,
          LoggedIn: false,
          LogoutLoading: true
  
      }
      case LOGOUT_FAILURE: return {
        ...state,
       

      }

      case REGISTER_REQUEST: return {
        ...state,
      

      }
      case REGISTER_SUCCESS: return {
        ...state,
    
     
      }
      case REGISTER_FAILURE: return {
     
        ...state,
       

      }

      default:{
        return {
        
          ...state
        }
      
      }
    }
  }
  
  export default auth_reducer
  