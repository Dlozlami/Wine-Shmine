import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AddToCart from './addToCart';

export default function WineCard({ wine }) {
  return (
    <View style={styles.card}>
      {/* Wine picture */}
      <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image source={{ uri: wine.imgUrl }} style={styles.image} />
            <Text style={styles.name}>{wine.name}</Text>
                <Text style={styles.typeVolume}>
                    {wine.type} wine, {wine.volume}
                </Text>
                <Text style={styles.price}>R{wine.priceInCents / 100}</Text>
                <AddToCart wine={wine} />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    
  },
  image: {
    width: '50%',
    height: 150, // Adjust the height to control the size of the image
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', 

  },
  typeVolume: {
    fontSize: 14,
    color: 'darkgray', // Set the text color to dark gray
    marginBottom: 5, // Add some spacing below the type and volume
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Set the text color to black
  },
});
