import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AddWine from './addWine';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CartScreen from './cart';

export default function Inside(){
  const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="addWine" component={AddWine} />
          <Drawer.Screen name="cart" component={CartScreen} options={{ title: 'Cart' }}/>
        </Drawer.Navigator>
        
    )
}



const styles = StyleSheet.create({})