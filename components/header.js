import { StyleSheet, Text, ImageBackground, View, Pressable} from 'react-native';
import React from 'react';
import Picture from '../components/picture';
import CartIcon from '../components/cartIcon';
import { Ionicons } from '@expo/vector-icons';

export default function Header({title, picture, cart,home}){
  return (

    <ImageBackground source={require('../assets/img/main_bg.jpg')} style={{width: '100%'}}>
        <View style={styles.container}>
            <View style={styles.left}>
                <Pressable onPress={() => {navigation.navigate('home')}}>
                    <Ionicons name="home-sharp" size={24} color="white" />
                </Pressable>
            </View>
            <View style={styles.right}>
                <CartIcon/>
                <Picture/>
            </View>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        height:"30%",
        flexDirection:'row',
    },
    left:{
        alignItems:'flex-start',
        width:'50%'
    },
    right:{
        alignItems:'flex-end'
    }
})