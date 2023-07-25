import { StyleSheet, Text, View, Pressable, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import Picture from '../components/picture';
import CartIcon from '../components/cartIcon';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({title, picture, cart, home}){
    const navigation = useNavigation();

  return (
    <View style={styles.main}>
        <StatusBar/>
        <SafeAreaView style={styles.container}>
            {home?<View style={styles.left}>
                <Pressable onPress={() => {navigation.navigate('home')}}>
                    <Ionicons name="home-sharp" size={32} color="white" />
                </Pressable>
            </View>:null}
            <View style={styles.right}>
                {cart?<CartIcon/>:null}
                {picture?<Picture/>:null}
            </View>
        </SafeAreaView>
        {title.length===0?<Text style={styles.title}>{title}</Text>:null}
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:'#09331d',
        padding:16
    },
    container:{
        flexDirection:'row',
        marginTop:50
    },
    left:{
        justifyContent:'center',
        width:'70%'
    },
    right:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'20%'
    },
    title:
    {
        marginVertical:10,
        fontWeight:600,
        fontSize:30,
        color: 'white',
    }
})