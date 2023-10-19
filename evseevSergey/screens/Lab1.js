import { useState } from "react";
import { Button, Text, View } from "react-native";

const Lab1 = () => {
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
      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title={"I'm just a button"}
      />
    </View>
  );
};
export default Lab1;
