import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { signupUser } from "../feature/signUpSlice";

export default function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [picture, setPicture] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [base64Image, setBase64Image] = useState("");
  const dispatch = useDispatch();
  const platform = Platform.OS;

  const handleSignUp = () => {
    const userData = {
      name,
      surname,
      email,
      password,
      phone,
      picture: base64Image,
    };
    dispatch(signupUser(userData));

    // Reset the state variables to clear the text fields
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    setPhone("");
    setPicture("");
    setImageURL("");
    setBase64Image("");
  };

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
          const blob = await response.blob();
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result;
            setBase64Image(base64data);
          };
        } catch (error) {
          console.error("Error converting image to base64:", error);
        }
      })();
    }
  }, [imageURL]);

  return (
    <ImageBackground
      source={require("../assets/img/main_bg.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.centerForm}>
        <View style={styles.container}>
          <Text style={styles.heading}>Sign Up</Text>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Surname</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your surname"
                value={surname}
                onChangeText={(text) => setSurname(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                value={phone}
                onChangeText={(text) => setPhone(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Picture</Text>
              <Pressable
                style={styles.imagePickerButton}
                onPress={handleImagePicker}
              >
                <Text style={styles.imagePickerButtonText}>Select Picture</Text>
              </Pressable>
              <Pressable style={[styles.button]} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#09331d",
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 20,
  },
  disabledButton: {
    opacity: 0.7,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  centerForm: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  okButton: {
    backgroundColor: "#f3572a",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  okButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
});
