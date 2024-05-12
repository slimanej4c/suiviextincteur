import { Tabs } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CustomDrawerContent from '../../../component/menu/CustomDrawerContent'
const TabsLayout = () => {
  console.log(Drawer.Screen)
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent ={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
      
        drawerActiveBackgroundColor:'red',
        drawerActiveTintColor:"white",
        drawerContentContainerStyle:{backgroundColor:'black',borderTopRightRadius:300}
      }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon : ({size,color})=>(<Ionicons name="home-outline" size={size} color={color}/>)
          }}
        />
        <Drawer.Screen
          name="Add_project" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Creer Projet',
            title: 'Creer Projet',
            drawerIcon : ({size,color})=>(<FontAwesome6 name="diagram-project" size={size} color={color} />)
          }}
        />
        <Drawer.Screen
          name="Join_project" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Rejoindre Projet',
            title: 'Rejoindre Projet',
            drawerIcon : ({size,color})=>(<Entypo name="add-to-list" size={size} color={color}/>)
          }}
        />
         <Drawer.Screen
          name="Dashboard" // This is the name of the page and must match the url from root
          options={{
          
            drawerLabel: 'Dashboard',
            title: 'Dashboard',
            drawerIcon : ({size,color})=>(  <MaterialIcons name="dashboard" size={size} color={color} />)
          }}
        />
       
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default TabsLayout;