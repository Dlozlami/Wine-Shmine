import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";

export default function ImageUpload({ setImageName }) {
  const [imageURL, setImageURL] = useState("");
  const [base64Image, setBase64Image] = useState("");
  const platform = Platform.OS;

  const handleImagePicker = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImageURL(result.assets[0].uri);
    }
  };

  useEffect(() => {
    if (imageURL) {
      (async () => {
        try {
          if (platform === "web") {
            const response = await fetch(imageURL);
            setPicture(response);
          }

          if (platform === "android") {
          }
        } catch (error) {
          console.error("Error converting image to base64:", error);
        }
      })();
    }
  }, [imageURL]);
  return (
    <View>
      <Text style={styles.label}>Picture</Text>
      <Pressable style={styles.imagePickerButton} onPress={handleImagePicker}>
        <Text style={styles.imagePickerButtonText}>Select Picture</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePickerButton: {
    backgroundColor: "#09331d",
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
  },
  imagePickerButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  imageFileName: {
    color: "black",
    fontSize: 14,
    marginTop: 5,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
