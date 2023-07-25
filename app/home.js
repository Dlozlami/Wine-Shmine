import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import Search from '../components/search';
import FilterBTN from '../components/filterBTN';
import wineDB from '../wines/wineDB.json'
const winelist = require('../wines/wineDB')
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
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
        <WineList wineList={winelist.wineDB} />

          
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
    marginVertical:10,

  },
  scrollContainer: {
    

  },
  wineHeader:{
    fontWeight:900,
    fontSize:28,
    
  }
});
