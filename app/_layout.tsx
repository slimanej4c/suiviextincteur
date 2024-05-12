import { Stack } from "expo-router";
import { Provider } from 'react-redux'
import  store from '../redux/store'

import { connect } from 'react-redux';
//<Provider store={store}>     
const RootLayout = () => {
  return (
<Provider store={store}>  

    <Stack screenOptions={{
              // Hide the header for all other routes.
              headerShown: false,
            }}>
       
       <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          href: null,
        }}
        
      />
  

     
    </Stack>

    </Provider>
  );
};

export default RootLayout;