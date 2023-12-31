import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from'./home';
import CartScreen from './cart';
import WelcomeScreen from './index';
import LoginScreem from './login';
import SignUpScreen from './signup';
import { store } from '../store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default  function App() {
   

  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="index" component={WelcomeScreen} options={{ title: 'Welcome',headerShown: false }}/>
        <Stack.Screen name="login" component={LoginScreem} options={{ title: 'Log In',headerShown: false }}/>
        <Stack.Screen name="signup" component={SignUpScreen} options={{ title: 'Sign Up',headerShown: false }}/>
        <Stack.Screen name="home" component={HomeScreen} options={{ title: 'Home',headerShown: false  }}/>
        <Stack.Screen name="cart" component={CartScreen} options={{ title: 'Cart',headerShown: false  }}/>
      </Stack.Navigator>
    </Provider>
  );
}
