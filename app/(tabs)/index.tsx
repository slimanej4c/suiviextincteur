import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { connect } from 'react-redux';
import { Login_redux} from '../../redux';
const Login= (props) => {
  const login_action=()=>{
    router.push({
      pathname: "/Home",
    
    })
    console.log('login is pressed')
    {props.Login_redux()}
  }
  return (

    <View>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login2 {props.load_logout}</Text>
      <Pressable onPress={()=>login_action()}>
     <Text>prsser  </Text>
      </Pressable>
    
    </View>

  );
};
const mapStateToProps = state => {
   
  return {
  
  
   load_logout:state.auth_reducer.load_logout,


  }
}


const mapDispatchToProps = dispatch => {
  
  return {
    
  Login_redux: () => dispatch(Login_redux( )),
  
   
   // logout :(f)=>dispatch(logout(f)),r
    
    
  }
}


export default  connect(
  mapStateToProps,mapDispatchToProps

 
 
)(Login) 

