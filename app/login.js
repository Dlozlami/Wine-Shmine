import { Link, Stack } from 'expo-router';
import { ImageBackground, Text, View } from 'react-native';
import Cart from './(secured)/cart';

export default function Login() {
  return (
    <ImageBackground
      source={require('../assets/img/app_bg.jpg')}
      style={{flex: 1,}}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >Uncork Happiness:</Text>
      <Cart/>
      </View>
    </ImageBackground>
  );
}
