import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

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
        style={{ backgroundColor: "white", width: "100%", padding: 6 }}
        value={login}
        onChangeText={(text) => setLogin(text)}
      />

      <Text>Пароль</Text>
      <TextInput
        style={{ backgroundColor: "white", width: "100%", padding: 6 }}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text>Нет аккаунта?</Text>
      <TouchableOpacity onPress={() => nav.replace("Registration")}>
        <Text style={{ color: "blue" }}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <Button title={"Войти"} onPress={() => nav.replace("Tab")} />
    </View>
  );
};

export default Login;
