import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState(1000);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 10,
      }}
    >
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
          setText(text - 7);
        }}
      >
        <Text style={{ color: "white" }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}