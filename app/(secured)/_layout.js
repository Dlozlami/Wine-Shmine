import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home';
import CartScreen from './cart'

const Stack = createNativeStackNavigator();

export default  function Root() {
  return (
      <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} options={{ title: 'Home' }}/>
      <Stack.Screen name="cart" component={CartScreen} options={{ title: 'Cart' }}/>
      </Stack.Navigator>
  );
}
