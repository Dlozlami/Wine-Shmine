import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import Search from '../components/search';
import FilterBTN from '../components/filterBTN';
import wineDB from '../wines/wineDB'
import WineList from '../components/wineList';
import Header from '../components/header';


export default function Home() {

  return (
    <ImageBackground source={require('../assets/img/app_bg.jpg')} style={{ width: '100%', height: '100%' }}>
      <Header title={''} picture={true} cart={true} home={true}/>
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
        {console.log(wineDB)}
        <WineList wineList={wineDB} />

          
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    width: '100%',
    marginVertical:10
  },
  scrollContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
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
  wineHeader:{
    fontWeight:900,
    fontSize:28,
    color: '#09331d',
  }
});
