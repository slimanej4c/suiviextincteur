import { Stack } from "expo-router";
import { Provider } from 'react-redux'
import store from '../redux/store'
//<Provider store={store}>     
const RootLayout = () => {
  return (
<Provider store={store}>  
    <Stack>
       
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