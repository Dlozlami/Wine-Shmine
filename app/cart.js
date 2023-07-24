import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Modal } from 'react-native';
import jwt_decode from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../components/cartCard';
import Totals from '../components/totals';

export default function Cart() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { itemList } = useSelector((store) => store.cart);

  return (
    <ImageBackground source={require('../assets/img/app_bg.jpg')} style={{ width: '100%', height: '100%' }}>
      <FlatList
        data={itemList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <CartCard itemIndex={index} wine={item} />}
        ListFooterComponent={<Totals />}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
