import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import Quantity from './quantity';
import { removeItemFromList } from '../feature/cartSlice';
import { useDispatch } from 'react-redux';

export default function CartCard({ itemIndex, wine }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(removeItemFromList(itemIndex));
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>X</Text>
      </Pressable>
      <View style={styles.left}>
        <Image source={{ uri: wine[1].imgUrl }} style={styles.image} />
      </View>
      <View style={styles.middle}>
        <Text style={styles.title}>{wine[1].name}</Text>
        <Text style={styles.price}>{`$${(wine[1].priceInCents / 100).toFixed(2)}`}</Text>
        <Quantity itemIndex={itemIndex} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    elevation: 2, // Add elevation for a subtle shadow effect (Android only)
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 15,
    zIndex: 1, // To make sure the button stays above the other content
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  left: {
    backgroundColor: '#09331d',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 80,
    height: 100,
    resizeMode: 'contain',
  },
  middle: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 14,
    color: 'darkgray',
  },
});
