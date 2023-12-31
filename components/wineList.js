import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import WineCard from './wineCard';
import wineDB from '../wines/wineDB'

export default function WineList({ wineList }){
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {wineList.map((wine) => (
        <WineCard key={wine.wine_id} wine={wine} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});


