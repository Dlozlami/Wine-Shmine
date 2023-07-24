import React from 'react';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

export default function Pay() {
    const navigation = useNavigation();
    const authorization_url = 'https://checkout.paystack.com/luKuasMan';
    const callback_url = 'http://10.255.66.152:19000/home';

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
