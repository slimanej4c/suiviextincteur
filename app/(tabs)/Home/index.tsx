import React, { useState, useEffect } from 'react';
import { Pressable, Text, View, StyleSheet, Animated, Easing } from 'react-native';
import { Link } from 'expo-router';
import { connect } from 'react-redux';
import Menu from '../../../component/menu/Menu';
import {menuOpen_redux } from './../../../redux';
const Home = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimation] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    //setMenuOpen(!menuOpen);
    props.menuOpen_redux()
  };

 
  useEffect(() => {
    // Si le menu est ouvert, animez-le vers la droite (0 à 1), sinon vers la gauche (1 à 0)
    Animated.timing(menuAnimation, {
      toValue: props.menuOpen ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [props.menuOpen]);
  const menuPosition = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });

  return (
    <View style={styles.container}>
      <View style={styles.menuButton} >
      <Pressable  onPress={toggleMenu}>
        <Text style={styles.menuButtonText}>Menu</Text>
      </Pressable>
      </View>
      
      <Animated.View style={[styles.menu, { transform: [{ translateX: menuPosition }] }]}>
        <Menu />
      </Animated.View>
      <Link href="/Home/Pages/Page1">Aller à la page 1</Link>
      <Link href="/Home/Pages/Page2">Aller à la page 2</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    zIndex:3,
    
    
  },
  menuButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: '0%',
    width: 300,
    height: '100%',
   

    zIndex:2,
  
  },
});

const mapStateToProps = state => {
  return {
      menuOpen: state.menu_reducer.menuOpen,
     
  };
}
const mapDispatchToProps = dispatch => ({
  menuOpen_redux: () => dispatch(menuOpen_redux()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
