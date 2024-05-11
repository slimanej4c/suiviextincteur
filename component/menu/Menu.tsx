import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Pressable, Text, View } from "react-native";
import { menuOpen_redux} from './../../redux';
import { Logout_redux} from './../../redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link ,router} from 'expo-router';

const Menu = (props) => {
    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:login');
            if (value !== null) {
                if(value === 'not_login'){
                    console.log('Retrieved data:date', value);
                    return true;
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
            console.log('Data saved successfully.', key);
            if (retrieveData) {
                console.log('Data saved successfully.login');
                retrieveData();
                router.replace('/');
            }
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const logout = () => {
        props.Logout_redux();
        storeData('@MySuperStore:email', '');
        storeData('@MySuperStore:password', '');
        storeData('@MySuperStore:login', 'not_login');
        props.menuOpen_redux()
    };

    const goHome = () => {
        // Fonction vide pour le bouton "Créer un Home"
        props.menuOpen_redux()
    };

    const createProject = () => {
        // Fonction vide pour le bouton "Créer un Projet"
        props.menuOpen_redux()
    };

    const joinProject = () => {
        // Fonction vide pour le bouton "Rejoindre un Projet"
        props.menuOpen_redux()
    };

    const goToDashboard = () => {
        // Fonction vide pour le bouton "Dashboard"
        props.menuOpen_redux()
    };

    return (
        <View style={styles.container}>
            {/* Partie supérieure du menu avec l'image de profil */}
            <View style={styles.profileContainer}>
                {/* Placeholder pour l'image de profil */}
                <View style={styles.profileImage}></View>
                {/* Texte ou icône pour le nom d'utilisateur et la fonction */}
                <View style={styles.userInfo}>
                    <Text style={styles.username}>Username</Text>
                    <View style={styles.functionContainer}>
                        <Text style={styles.function}>Fonction</Text>
                    </View>
                </View>
            </View>
            {/* Partie inférieure du menu avec les options */}
            <View style={styles.optionContainer}>
                <Pressable style={styles.optionButton} onPress={goHome}>
                    <Text style={styles.optionText}>Créer un Home</Text>
                </Pressable>
                <Pressable style={styles.optionButton} onPress={createProject}>
                    <Text style={styles.optionText}>Créer un Projet</Text>
                </Pressable>
                <Pressable style={styles.optionButton} onPress={joinProject}>
                    <Text style={styles.optionText}>Rejoindre un Projet</Text>
                </Pressable>
                <Pressable style={styles.optionButton} onPress={goToDashboard}>
                    <Text style={styles.optionText}>Dashboard</Text>
                </Pressable>
                <Pressable style={styles.optionButton} onPress={logout}>
                    <Text style={styles.optionText}>Déconnexion</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        overflow: 'hidden',
        borderTopRightRadius: 40, // Ajout du radius au coin supérieur droit
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: "5%",
        height: "30%",
        backgroundColor: 'red',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 60,
        backgroundColor: 'gray', // Placeholder pour l'image de profil
        marginRight: 10,
    },
    userInfo: {
        marginLeft: 10, // Ajout de marge entre l'image de profil et le texte
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "white",
    },
    functionContainer: {
        marginTop: 5, // Ajout d'un espace entre le nom d'utilisateur et la fonction
        alignItems: 'center', // Alignement au centre
    },
    function: {
        fontSize: 14,
        color: 'gray',
        borderRadius: 10,
        textAlign: "center",
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 10,
    },
    optionContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    optionButton: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    optionText: {
        fontSize: 16,
        color: 'red',
    },
});

const mapStateToProps = state => {
    return {
        menuOpen: state.menu_reducer.menuOpen,
    };
}

const mapDispatchToProps = dispatch => {
    return {
      
        menuOpen_redux: () => dispatch(menuOpen_redux()),
        Logout_redux: () => dispatch( Logout_redux()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
