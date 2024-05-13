import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { connect } from 'react-redux';
import { Logout_redux} from './../../redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link ,router} from 'expo-router';
import { View ,StyleSheet ,Text ,Image} from  'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function CustomDrawerContent(props) {
    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:login');
            if (value !== null) {
                if (value === 'not_login') {
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
    };

    return (
        <View style={styles.container}>
       
            <View style={styles.header}>
                  <View style={styles.userImg}>
                  <Image
                        source={require('../../assets/images/Photo.jpg')}
                        style={{ width: 80, height: 80, borderRadius: 40 }}
                    />
                </View>
                <View style={styles.userInfo}>
                    <Text style={styles.username}>HAMOU</Text>
                    <Text style={styles.function}>Function</Text>
                </View>
            </View>
       
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'white'}}>
               
                <DrawerItemList {...props} />
             
                <DrawerItem label={"Déconnexion"} onPress={() => logout()} 
           
          />
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        borderTopRightRadius:30,
    },
    header: {
        backgroundColor: 'red',
        justifyContent: 'center', // Centrer horizontalement
        alignItems: 'center', // Centrer verticalement
        height: 200, // Hauteur fixe du header
    },
    userImg: {
        width: 80,
        height: 80,
        borderRadius: 40, // Pour faire un cercle
        backgroundColor: 'gray',
        marginBottom: 10, // Espace en bas du cercle
    },
    userInfo: {
        alignItems: 'center', // Centrer horizontalement
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    function: {
        fontSize: 14,
        color: 'white',
    },
});

const mapStateToProps = state => {
    return {
        menuOpen: state.menu_reducer.menuOpen,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        Logout_redux: () => dispatch(Logout_redux()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContent);