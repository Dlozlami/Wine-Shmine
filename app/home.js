import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Search from '../components/search';
import Cart from './cart';
import { Stack } from 'expo-router';
import WineList from '../components/wineList';
import wineDB from '../wines/wineDB.json'


export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <Search />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            <Pressable style={styles.categoryButton}>
            <Text>Dry</Text>
            </Pressable>
            <Pressable style={styles.categoryButton}>
            <Text>Sweet</Text>
            </Pressable>
            <Pressable style={styles.categoryButton}>
            <Text>Semi-Sweet</Text>
            </Pressable>
            <Pressable style={styles.categoryButton}>
            <Text>Red</Text>
            </Pressable>
            <Pressable style={styles.categoryButton}>
            <Text>White</Text>
            </Pressable>
            <Pressable style={styles.categoryButton}>
            <Text>Rose</Text>
            </Pressable>
            <Pressable style={styles.categoryButton}>
            <Text>Sparkling</Text>
            </Pressable>
        </ScrollView>
        <WineList wineList={wineDB.wineList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    width: '100%',
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
});
