import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useSelector } from 'react-redux';
import { Entypo } from '@expo/vector-icons';

export default function Cart(){
  const {value} = useSelector((state) => state.login) 
  return (
    <View>
      <Entypo name="shopping-cart" size={24} color="black" />
    </View>
  )
}



const styles = StyleSheet.create({})