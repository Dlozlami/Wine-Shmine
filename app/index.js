import React from 'react';
import { Link, Stack } from 'expo-router';
import { ImageBackground, Image, Text, View, Pressable, StyleSheet } from 'react-native';

export default function Welcome() {
  return (
    <ImageBackground
      source={require('../assets/img/main_bg.jpg')}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/icons/logo01.png')}
          style={styles.logo}
        />
        <Text style={styles.slogan}>Uncork Happiness:</Text>
        <Text style={styles.slogan}>Find Your Grape Escape!</Text>
      </View>

      <Pressable style={styles.button} onPress={() => {}}>
        
        <Link href={{ pathname: 'home'}}><Text style={styles.buttonText}>Get started</Text></Link>
      </Pressable>

      <Stack.Screen
        options={{
          title: 'Welcome to Wine Shmine',
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  logoContainer: {
    alignItems: 'flex-start',
    marginLeft: '10%',
    marginTop: '20%',
  },
  logo: {
    width: 200,
    height: 200,
  },
  slogan: {
    color: '#c7f9df',
    fontSize: 15,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
    marginLeft: '10%',

  },
  buttonText: {
    color: '#0f2027',
    fontSize: 18,
  },
});
