import React, { useState, useEffect } from 'react';
import { Pressable, Text, View, StyleSheet, Animated, Easing ,TouchableOpacity  }from 'react-native';
import { Link } from 'expo-router';
import { connect } from 'react-redux';
import Menu from '../../../component/menu/Menu';
import {menuOpen_redux } from './../../../redux';

import { AntDesign } from '@expo/vector-icons';
const Home = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimation] = useState(new Animated.Value(0));
  const goToExtincteurDetails = () => {
    // À remplacer par la navigation réelle vers la page de détails des extincteurs
  };

  // Fonction pour naviguer vers la page des projets
  const goToProjectsPage = () => {
 // À remplacer par la navigation réelle vers la page des projets
  };

  // Fonction pour naviguer vers le tableau de bord
  const goToDashboard = () => {
    // À remplacer par la navigation réelle vers le tableau de bord
  };
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
    {/* Section Notifications */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Notifications</Text>
      <TouchableOpacity onPress={goToExtincteurDetails} style={styles.notification}>
        <Text style={styles.notificationText}>Vous avez 10 extincteurs à vérifier ce mois-ci</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToExtincteurDetails} style={styles.notification}>
        <Text style={styles.notificationText}>4 extincteurs à vérifier cette semaine</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToExtincteurDetails} style={styles.notification}>
        <Text style={styles.notificationText}>1 extincteur à vérifier aujourd'hui</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProjectsPage} style={styles.link}>
        <Text style={styles.linkText}>Voir les détails</Text>
      </TouchableOpacity>
    </View>

    {/* Section Projets */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Projets</Text>
      <TouchableOpacity onPress={goToProjectsPage} style={styles.link}>
        <Text style={styles.linkText}>Vous avez 5 projets en cours</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProjectsPage} style={styles.link}>
        <Text style={styles.linkText}>2 projets en attente de rejoindre</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProjectsPage} style={styles.link}>
        <Text style={styles.linkText}>Créer un nouveau projet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProjectsPage} style={styles.link}>
        <Text style={styles.linkText}>Rejoindre un projet existant</Text>
      </TouchableOpacity>
    </View>

    {/* Section Récapitulatif */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Récapitulatif</Text>
      <Text>7 projets, 20 sites, 300 extincteurs</Text>
      <TouchableOpacity onPress={goToDashboard} style={styles.link}>
        <Text style={styles.linkText}>Voir le tableau de bord</Text>
      </TouchableOpacity>
    </View>
  </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notification: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  notificationText: {
    fontWeight: 'bold',
  },
  link: {
    marginTop: 5,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
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
