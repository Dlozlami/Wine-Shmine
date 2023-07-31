import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { addItemToList } from "../feature/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

export default function AddToCart({ wine }) {
  const { itemsLength, itemsList } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToList(wine));
  };

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={handleAddToCart}
    >
      <Ionicons name="add-circle-sharp" size={48} color="#09331d" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {},
});
