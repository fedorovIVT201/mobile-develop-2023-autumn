import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title={"Кнопка"}
      ></Button>
      <Button
        onPress={() => {
          setCount(0);
        }}
        title={"Reset"}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
