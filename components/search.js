import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Search = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={24} color="black" style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Search wines..."
        placeholderTextColor="#888"
        // Add any search functionality or event handling here
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5, // Rounded edges
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});
