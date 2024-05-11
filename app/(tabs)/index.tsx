import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard ,TouchableOpacity , ActivityIndicator  } from 'react-native';
import { Login_redux } from './../../redux';
import { connect } from 'react-redux';
import { Link, router } from "expo-router";
import { persistor,store } from './../../redux/store'; // Assurez-vous d'importer le persistor depuis votre fichier de store
import AsyncStorage from '@react-native-async-storage/async-storage';

const  App=(props)=> {
  const [inputFocused, setInputFocused] = useState(false);
  const [CheckLogin, setCheckLogin] = useState(false);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(
        '@MySuperStore:key',
        'is_login2',
      );
      console.log('Data saved successfully2.');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  
 
  
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:key');
      if (value !== null) {
        // We have data!!
        if (value=='is_login2')
        console.log('Retrieved data:', value);
        setCheckLogin(true)
        router.push('./Home')
      } else {
        console.log('No data found.');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
  {!CheckLogin && retrieveData()}
  
  
  const login_action = () => {
    // Actions à effectuer lorsqu'on appuie sur le bouton de login
    props.Login_redux()

    
  };

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setInputFocused(false);
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);
  useEffect(() => {
    {props.LoggedIn && router.push('./Home')}
    {props.LoggedIn &&  storeData();}
   
    
  }, [props.LoggedIn]);
  useEffect(() => {
    
    
  }, [props.LoginLoading]);
  useEffect(() => {
    {CheckLogin && retrieveData()}
    
  }, [CheckLogin]);
  return (
    <View style={styles.container}>
       {props.LoginLoading && (
       <View style={styles.overlay}>
       
          <View style={styles.overlayContent}>
            <ActivityIndicator size="large" color="red" />
           
          </View>
       
      </View>
       )}
         {!CheckLogin && (
       <View style={styles.overlay}>
       
          <View style={styles.overlayContent}>
            <ActivityIndicator size="large" color="red" />
           
          </View>
       
      </View>
       )}
      <View style={styles.section_top}>
        <Text>LOGO</Text>
      </View>
      <View style={[styles.section_center, inputFocused && { flex: 2/3 }]}>
        <View style={styles.input}>
          <TextInput
            placeholder="Email"
            onFocus={() => setInputFocused(true)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onFocus={() => setInputFocused(true)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={login_action}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button_transparent} onPress={null}>
          <Text style={styles.buttonText_transparent}>Create Account</Text>
          {props.LoginLoading && <Text>Loading...</Text>}
        {props.LoggedIn && <Text>Congratulations!</Text>}
        </TouchableOpacity>
      </View>
      <View style={[styles.section_bottom, inputFocused && { flex: 1/8 }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  overlay: {
    position:'absolute',
    flex: 1,
    width:"100%",
    height:"100%",
    backgroundColor: 'rgba(255,0, 0, 0.2)', // Transparent background
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:2
  },
  overlayContent: {
    backgroundColor: 'transparent',
  },
  section_top: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  section_center: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  section_bottom: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
   
    
  
    // Ajoutez ceci pour définir la couleur de survol
    
  },
  button_transparent:{
    width: '80%',
    height: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  buttonText: {

    color: 'white',
  },
  buttonText_transparent: {
    color: 'red',
  },

});
const mapStateToProps = state => {
   
  return {
  
  
    LoginLoading:state.auth_reducer.LoginLoading,
    LoggedIn:state.auth_reducer.LoggedIn,
    


  }
}


const mapDispatchToProps = dispatch => {
  
  return {
    

  
   
    Login_redux: () => dispatch(Login_redux()),
    
    
  }
}


export default  connect(
  mapStateToProps,mapDispatchToProps

 
 
)(App) 
