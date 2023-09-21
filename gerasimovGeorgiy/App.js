import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 10,
      }}
    >
      <Text>{count}</Text>
      <TouchableOpacity
        style={{
          height: 40,
          width: 200,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          backgroundColor: "red",
        }}
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text style={{ color: "white" }}>Кнопка</Text>
      </TouchableOpacity>
    </View>
  );
}
