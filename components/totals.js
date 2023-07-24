import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import Checkout from '../components/checkout';

export default function Totals() {
  const { total, subtotal, VAT } = useSelector((store) => store.cart);
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
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>{`ZAR ${subtotal.toFixed(2)}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>VAT @ 15%</Text>
        <Text style={styles.value}>{`ZAR ${(subtotal * 0.15).toFixed(2)}`}</Text>
      </View>
      <View style={styles.line} />
      <View style={[styles.row, styles.totalRow]}>
        <Text style={[styles.label, styles.bold]}>Total</Text>
        <Text style={[styles.value, styles.bold]}>{`ZAR ${total.toFixed(2)}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#09331d',
    padding: 10,
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
});
