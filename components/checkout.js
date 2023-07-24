import React from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import { View } from 'react-native';

export default function Pay() {
  return (
    <View style={{ flex: 1 }}>
      <Paystack  
        paystackKey="pk_test_24136f8ff804d753571a93efdac04e117f057dee"
        amount={250000}
        billingEmail="paystackwebview@something.com"
        activityIndicatorColor="green"
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
        }}
        autoStart={true}
      />
    </View>
  );
}