import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";

const Lab1 = () => {
  const [count, setCount] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
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
};

export default Lab1;
