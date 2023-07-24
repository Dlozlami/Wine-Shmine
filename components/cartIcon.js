import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { Entypo } from '@expo/vector-icons';

export default function Cart(){
  const {itemsLength} = useSelector((state) => state.cart) 

  return (
    <View style={styles.container}>
      <Entypo name="shopping-cart" size={24} color="#09331d" />
      <View style={styles.items}>
        <Text style={styles.textItems}>{ititemsLengthems}</Text>
      </View>
    </View>
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