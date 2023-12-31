import { StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Picture(){
  const imgUrl= '../assets/users/uxdlozi.jpg';
  return (
    <Image
        style={styles.tinyUser}
        source={require(imgUrl)}
      />
  )
}

const styles = StyleSheet.create({
  tinyUser: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});