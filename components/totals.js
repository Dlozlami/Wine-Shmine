import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {checkout} from '../feature/cartSlice';
import { Linking } from 'react-native';


export default function Totals() {
  const { total, subtotal, VAT } = useSelector((store) => store.cart);
  const { email} = useSelector((store) => store.login);
  const dispatch = useDispatch();

  const handleCheckout = async () => {
    try {
      let amount = Math.trunc(total);
      const url = await dispatch(checkout({email,amount}));
      console.log(url)
      // navigate to external link below
      if (url) {
        // If the URL is provided, open the external link
        await Linking.openURL(url);
      } else {
        console.log('Checkout URL not provided.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>{`${(subtotal/100).toFixed(2)}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>VAT @ 15%</Text>
        <Text style={styles.value}>{`${((subtotal/100) * 0.15).toFixed(2)}`}</Text>
      </View>
      <View style={styles.line} />
      <View style={[styles.row, styles.totalRow]}>
        <Text style={[styles.label, styles.bold]}>Total</Text>
        <Text style={[styles.value, styles.bold]}>{`ZAR ${(total/100).toFixed(2)}`}</Text>
      </View>

      {/* Checkout Button */}
      <Pressable onPress={handleCheckout} style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#09331d',
    padding: 10,
    borderRadius:10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
  value: {
    color: 'white',
    fontSize: 16,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginVertical: 5,
  },
  totalRow: {
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  checkoutButtonText: {
    color: '#09331d',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
