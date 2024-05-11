import { Stack } from "expo-router";
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { connect } from 'react-redux';
//<Provider store={store}>     
const RootLayout = () => {
  return (
<Provider store={store}>  
<PersistGate loading={null} persistor={persistor}>
    <Stack>
       
       <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          href: null,
        }}
        
      />
  

     
    </Stack>
    </PersistGate>
    </Provider>
  );
};

export default RootLayout;