import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {decreaseQauntity,addItemToList} from '../feature/cartSlice';
import { AntDesign } from '@expo/vector-icons';

export default function quantity({listItem}){
    const dispatch = useDispatch();
    
  return (
    <View>
      <Text>quantity</Text>
    </View>
  )
}

const styles = StyleSheet.create({})