import { Link, Stack } from 'expo-router';
import { Image, Text, View } from 'react-native';

export default function Login() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: 'Login | Wine Shmine',
        }}
      />

    </View>
  );
}
