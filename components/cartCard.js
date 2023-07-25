import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import Quantity from './quantity';
import { useDispatch } from 'react-redux';

export default function CartCard({ itemIndex, wine }) {

  return (

      <View style={styles.container}>
        <View style={styles.left}>
          <Image source={{ uri: wine[1].imgUrl }} style={styles.image} />
        </View>
        <View style={styles.middle}>
          <Text style={styles.title}>{wine[1].name}</Text>
          <Text style={styles.price}>{`ZAR ${(wine[1].priceInCents / 100).toFixed(2)}`}</Text>
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
    elevation: 2, 

  },
  image: {
    width: 80,
    height: 100,
    resizeMode: 'contain',
  },
  middle: {
    marginLeft: 10,
    width:"70%"
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
  main:{
    alignContent:'center',

  }
});
