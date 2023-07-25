import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Search from '../components/search';
import FilterBTN from '../components/filterBTN';
import wineDB from '../wines/wineDB.json'
import WineList from '../components/wineList';


export default function Home() {

  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <Search />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <FilterBTN title="Dry" />
        <FilterBTN title="Sweet" />
        <FilterBTN title="Semi-Sweet" />
        <FilterBTN title="Red" />
        <FilterBTN title="White" />
        <FilterBTN title="Rose" />
        <FilterBTN title="Sparkling" />
      </ScrollView>
      <View>
          <Text style={styles.wineHeader}>Popular wines</Text>
      </View>
      <ScrollView>
          <WineList wineList={wineDB.wineList} />
      </ScrollView>
        
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
    padding:15,
    marginVertical:5
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
  wineHeader:{
    fontWeight:600,
    fontSize:30,
    color: '#09331d',
  }
});
