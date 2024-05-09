import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { connect } from 'react-redux';
const part1= (props) => {
  return (
    <View>
      <Text>sous Page1 {props.load_logout}</Text>
    
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
    

  
   
   // logout :(f)=>dispatch(logout(f)),r
    
    
  }
}


export default  connect(
  mapStateToProps,mapDispatchToProps

 
 
)(part1) 


