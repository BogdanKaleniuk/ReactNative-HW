import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  ImageBackground,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };
  const image = require("./images/PhotoBG.jpg");

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.form}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View>
                <Text style={styles.inputTitle}>EMAIL</Text>
                <TextInput
                  value={name}
                  onChangeText={nameHandler}
                  placeholder="Username"
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.input}
                />
              </View>
              <Button title={"Login"} style={styles.input} onPress={onLogin} />
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  form: {
    alignItems: "center",
    marginHorizontal: 40,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  input: {
    borderRadius: 10,
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 10,
  },
  inputTitle: {
    color: "white",
    marginBottom: 10,
  },
});
