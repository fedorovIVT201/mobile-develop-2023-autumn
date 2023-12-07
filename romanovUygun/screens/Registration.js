import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { gql, useMutation } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
//регисрация логин ендпоинты
const REGISTER = gql`
  mutation ($data: RegistrationUserInput!) {
    registerUser(data: $data) {
      token
    }
  }
`;

const Registration = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [mutateFunction, { data, loading, error }] = useMutation(REGISTER);
  const nav = useNavigation();
  return (
    <View
      style={{
        margin: 22,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.colorcontainer}>
        <View style={styles.buttoncontainer}>
          <TextInput
            value={login}
            onChangeText={(text) => setLogin(text)}
            style={styles.input}
            textAlign="center"
            allowFontScaling
            placeholder="Login"
            placeholderTextColor="#CCCCCA"
          />
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
            textAlign="center"
            allowFontScaling
            placeholder="Password"
            placeholderTextColor="#CCCCCA"
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            textAlign="center"
            allowFontScaling
            placeholder="Password"
            placeholderTextColor="#CCCCCA"
          />
          <Button
            title="Sign Up"
            onPress={() => {
              mutateFunction({
                variables: {
                  data: {
                    login,
                    name,
                    password,
                  },
                },
              })
                .then((data) => {
                  console.log(data);
                  const token = data?.data?.regsterUser?.token;

                  const storeData = async () => {
                    try {
                      await AsyncStorage.setItem("token", token);
                    } catch (e) {}
                  };
                  storeData();
                  nav.goBack();
                })
                .catch((e) => {});
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttoncontainer: {
    marginBottom: 22,
  },
  colorcontainer: {
    width: 316,
    height: 230,
    margin: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },
  input: {
    height: 52,
    marginTop: 22,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#F7F6F1",
    borderRadius: 25,
    fontSize: 18,
    fontFamily: "IBMPlexMono_400Regular",
    color: "CCCCCA",
  },
});

export default Registration;
