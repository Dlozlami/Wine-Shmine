import React from 'react';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import {clearCheckoutURL} from '../feature/cartSlice';

export default function Pay() {
    const navigation = useNavigation();
    const authorization_url =  useSelector((state) => state.cart.checkoutURL.authorization_url);
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
