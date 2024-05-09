import { Tabs } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Link, router } from "expo-router";
const TabsLayout = () => {
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
          href: null,
        }}
      />
      <Tabs.Screen
        name="Home/Pages/Page1"
        options={{
          headerShown: false,
        }}
      />
       <Tabs.Screen
        name="Home/Pages/Page2"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
   
  );
};

export default TabsLayout;