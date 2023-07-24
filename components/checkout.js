import React from 'react';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import {clearCheckoutData,clearitemsList} from '../feature/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Checkout({setModalOpen}) {
  const dispatch = useDispatch();
    const navigation = useNavigation();
    const authorization_url =  useSelector((state) => state.cart.checkoutData.authorization_url);
    const callback_url = useSelector((state) => state.cart.callBackURL);

  onNavigationStateChange = state => {
 
    const { url } = state;

    if (!url) return;

    if (url === callback_url) {
			// get transaction reference from url and verify transaction, then redirect
      const redirectTo = 'window.location = "' + callback_url + '"';
      this.webview.injectJavaScript(redirectTo);
    }
		
		if(url === 'https://standard.paystack.co/close') {
      // handle webview removal
      // You can either unmount the component, or
      // Use a navigator to pop off the view
      //dispatch(clearCheckoutData);
      //dispatch(clearitemsList);
      setModalOpen(false);
    }
  };

  return (
    <WebView 
      source={{ uri: authorization_url }}
      style={{ marginTop: 40 }}
      onNavigationStateChange={ this.onNavigationStateChange }
    />
  );
}
