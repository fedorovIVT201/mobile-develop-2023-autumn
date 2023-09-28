import {useState} from "react"
import {TouchableOpacity, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View 
    style={{
      flex: 1,
      gap: 10,
      alignItems: "center",
      justifyContent: "center",
      }}>
      <Text>{count}</Text>
      <TouchableOpacity
        style={{
          height: 40,
          width: 200,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          backgroundColor: "black",
        }}
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text style={{ color: "white" }}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 40,
          width: 200,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          backgroundColor: "black",
        }}
        onPress={() => {
          setCount(count - 1);
        }}
      >
        <Text style={{ color: "white" }}>-</Text>
      </TouchableOpacity>
    </View>
  );
}