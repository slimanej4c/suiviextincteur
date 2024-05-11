import { Tabs } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { connect } from 'react-redux';
const TabsLayout = (props) => {
  const a=true 
  return (
  
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          href: null,
         
        }}
      />
    <Tabs.Screen
        name="Home/index"
        options={{
          headerShown: false,
          href:props.load_logout=="is login" ? true : null,
        }}
      />
      <Tabs.Screen
        name="Home/Pages/Page1"
        options={{
          href:props.load_logout =="is login" ? true : null,
        }}
      />
       <Tabs.Screen
        name="Home/Pages/Page2"
        options={{
          href:props.load_logout =="is login" ? true : null,
        }}
      />
    </Tabs>
   
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

 
 
)(TabsLayout) 


