import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Login_redux } from './../../redux';
import { connect } from 'react-redux';
import { Link, router } from "expo-router"; // Import de la fonction router pour la navigation
import AsyncStorage from '@react-native-async-storage/async-storage';
import Menu from '../../component/menu/Menu';
const App = (props) => {
  const [inputFocused, setInputFocused] = useState(false);
  const [CheckLogin, setCheckLogin] = useState(false);
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('admin2024');

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data saved successfullyv r.');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Fonction de connexion
  const login_action = (email, password) => {
    props.Login_redux(email, password);
  };

  // Récupérer les données de connexion stockées localement
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:login');
      if (value !== null) {
        // Si les données existent et indiquent une connexion précédente, vérifiez
        // s'il faut se connecter automatiquement
        if (value == 'is_login') {
          console.log('Retrieved data:', value);
          setCheckLogin(true);
          login_action(email, password);
        }
      } else {
        // Aucune donnée trouvée, pas de connexion précédente
        setCheckLogin(false);
        console.log('No data found.');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  // Vérifie automatiquement la connexion lors du montage initial
  if (!CheckLogin && !props.LogoutLoading) { retrieveData() }

  // Si la connexion est réussie mais le chargement est en cours, attendez
  if (CheckLogin && props.LogoutLoading) {
    setCheckLogin(false)
  }

  // Effet pour écouter le clavier et mettre à jour l'état
  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setInputFocused(false);
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  // Effet pour gérer les actions après une connexion réussie
  useEffect(() => {
    { props.LoggedIn && storeData('@MySuperStore:email', email) }
    { props.LoggedIn && storeData('@MySuperStore:password', password); }
    { props.LoggedIn && storeData('@MySuperStore:login', 'is_login'); }
  }, [props.LoggedIn]);

  // Effet pour rediriger vers la page d'accueil après une connexion réussie
  useEffect(() => {
    { props.LoggedIn && router.replace('/Home'); }
  }, [props.LoginLoading]);

  // Effet pour vérifier la connexion et récupérer les données si nécessaire
  useEffect(() => {
    { CheckLogin && retrieveData() }
  }, [CheckLogin]);

  // Effet pour récupérer les données lors du chargement
  useEffect(() => {
    { props.LogoutLoading && retrieveData() }
  }, [props.LogoutLoading]);

  // Rendu de l'interface utilisateur
  return (
    <View style={styles.container}>
      {/* Overlay de chargement lors de la connexion */}
      {props.LoginLoading && (
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <ActivityIndicator size="large" color="red" />
          </View>
        </View>
      )}
      {/* Overlay de chargement lors de la récupération des données */}
      {CheckLogin && (
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <ActivityIndicator size="large" color="green" />
          </View>
        </View>
      )}
      <View style={styles.section_top}>
        <Text>LOGoO </Text>
      </View>
      <View style={[styles.section_center, inputFocused && { flex: 2 / 3 }]}>
        <View style={styles.input}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            onFocus={() => setInputFocused(true)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            onFocus={() => setInputFocused(true)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => login_action(email, password)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_transparent} onPress={null}>
          <Text style={styles.buttonText_transparent}>Create Account</Text>
          {props.LoginLoading && <Text>Loading...</Text>}
          {props.LoggedIn && <Text>Congratulations!</Text>}
        </TouchableOpacity>
      </View>
      <View style={[styles.section_bottom, inputFocused && { flex: 1 / 8 }]}></View>
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
    position: 'absolute',
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(255,0, 0, 0.2)', // Overlay semi-transparent pour le chargement
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
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
  },
  button_transparent: {
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
    LogoutLoading: state.auth_reducer.LogoutLoading,
    LoginLoading: state.auth_reducer.LoginLoading,
    LoggedIn: state.auth_reducer.LoggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Login_redux: (email, password) => dispatch(Login_redux(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
