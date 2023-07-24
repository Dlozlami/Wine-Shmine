import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToList, decreaseQuantity } from '../feature/cartSlice';

export default function Quantity({ itemIndex }) {
  const dispatch = useDispatch();
  const { itemList } = useSelector((store) => store.cart);

  const addItem = () => {
    dispatch(addItemToList(itemIndex));
  };

  const decreaseQuantity = () => {
    dispatch(decreaseQauntity(itemIndex));
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={addItem} style={[styles.square, styles.grayBackground]}>
        <AntDesign name="pluscircleo" size={24} color="#09331d" />
      </Pressable>
      <View style={[styles.square, styles.whiteBackground]}>
        <Text style={styles.text}>{itemList[itemIndex][0]}</Text>
      </View>
      <Pressable onPress={decreaseQuantity} style={[styles.square, styles.grayBackground]}>
        <AntDesign name="minuscircleo" size={24} color="#09331d" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  square: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  grayBackground: {
    backgroundColor: '#D3D3D3',
  },
  whiteBackground: {
    backgroundColor: 'white',
  },
  text: {
    color: '#09331d',
  },
});
