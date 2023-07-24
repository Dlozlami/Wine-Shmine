import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable,TextInput, Modal } from 'react-native';
import jwt_decode from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {checkout} from '../feature/cartSlice';
import Checkout from '../components/checkout';

export default function Cart() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {itemsLength} = useSelector((store)=>store.cart);
  const [modalOpen,setModalOpen] = useState(false);


  const handleCheckout = async () => {
    try {
      await dispatch(checkout());
      setModalOpen(true)
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <ImageBackground source={require('../assets/img/app_bg.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.centerForm}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            
            <Pressable
              style={[styles.button]}
              onPress={handleCheckout}
            >
              <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>

          </View>
        </View>
      </View>
      {/* Fullscreen Modal */}
      <Modal
        visible={modalOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalOpen(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Render the Checkout component inside the modal */}
            <Checkout setModalOpen={setModalOpen} />
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#09331d',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  centerForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  okButton: {
    backgroundColor: '#f3572a',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  okButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});