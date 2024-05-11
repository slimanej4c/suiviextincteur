import { Link, router } from "expo-router";
import { Pressable, Text, View ,TouchableOpacity  } from "react-native";
import { connect } from 'react-redux';
import { Logout_redux } from './../../../redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home= (props) => {
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:login');
      if (value !== null) {
        // We have data!!
     if(value == 'not_login'){
      console.log('Retrieved data:date', value);
      return true

     }
        
      } else {
     
        console.log('No data found.');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data saved successfully.',key);
      if (retrieveData){
        console.log('Data saved successfully.login');
        retrieveData()
        router.replace('/')
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  const logout=()=>{
    props.Logout_redux()
   
    storeData('@MySuperStore:email', '')
      
      storeData('@MySuperStore:password', '')
        storeData('@MySuperStore:login','not_login')
       // router.replace('/');
     }
  return (
    <View>
      <Text>Menu</Text>
      <Text>Menu</Text>
      <Text>Menu</Text>
      <Text>Menu</Text>
      <Link href="/Home/Pages/Page1">go page1</Link>
      <Link href="/Home/Pages/Page2">go page1</Link>
      <TouchableOpacity onPress={()=>logout()}>
          <Text> logout</Text>
         
        </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = state => {
   
  return {
  
  
    LoginLoading:state.auth_reducer.LoginLoading,
    LoggedIn:state.auth_reducer.LoggedIn,
    


  }
}


const mapDispatchToProps = dispatch => {
  
  return {
    

  
   
    Logout_redux: () => dispatch(Logout_redux()),
    
    
  }
}


export default  connect(
  mapStateToProps,mapDispatchToProps

 
 
)(Home) 
