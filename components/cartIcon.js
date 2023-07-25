import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {useSelector } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Cart(){
  const navigation = useNavigation();
  const {totalQauntities} = useSelector((state) => state.cart) 

  return (
    <Pressable style={styles.container} onPress={() => {navigation.navigate('cart')}}>
      <Entypo name="shopping-cart" size={24} color="#09331d" />
      <View style={styles.items}>
        <Text style={styles.textItems}>{totalQauntities}</Text>
      </View>
    </Pressable>
  )
}



const styles = StyleSheet.create({
container:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#e2dedb',
  borderRadius: 5,
  padding:5,
  width: 60,
  height: 38,
  marginRight:10
},
items:{
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#09331d',
  borderRadius: 5,
  paddingHorizontal:5,
  paddingVertical:1,
  marginLeft:5
},
textItems:{
  alignItems: 'center',
  justifyContent: 'center',
  color: '#e2dedb',
  fontSize:18
}
})