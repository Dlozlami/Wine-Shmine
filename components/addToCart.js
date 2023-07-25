import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { addItemToList } from '../feature/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

export default function AddToCart({ wine }) {
    const {itemsLength,itemsList} = useSelector((store)=>store.cart)
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToList(wine));
  };

  return (
    <Pressable style={styles.button} onPress={handleAddToCart}>
      <Ionicons name="add-circle-sharp" size={48} color="#09331d" />
    </Pressable>
  );
}

const styles = StyleSheet.create({


});
