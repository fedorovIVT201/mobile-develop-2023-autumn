import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const nav = useNavigation();

  return (
    <View
      style={{
        padding: 14,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>Логин</Text>
      <TextInput
        style={{ backgroundColor: "white", width: "95%", padding: 6 }}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <Text>Пароль</Text>
      <TextInput
        style={{ backgroundColor: "white", width: "95%", padding: 6 }}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Text>Повторите пароль</Text>
      <TextInput
        style={{ backgroundColor: "white", width: "95%", padding: 6 }}
        secureTextEntry={true}
        value={password2}
        onChangeText={(text) => setPassword2(text)}
      />

      <Button title={"Регистрироваться"} onPress={() => nav.replace("Tab")} />
      <Text>Есть аккаунт?</Text>
      <TouchableOpacity onPress={() => nav.replace("Login")}>
        <Text style={{ color: "blue", borderBottomColor: "blue" }}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registration;
