import React, { useState, useCallback, useMemo } from "react";
import { View, Text, Button, TextInput } from "react-native";

const Lab3 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleNameChange = useCallback((text) => {
    setName(text);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ marginBottom: 20 }}>Count(useCallback()): {count}</Text>
      <Text style={{ marginBottom: 20 }}>
        Double Count(useMemo()): {doubleCount}
      </Text>
      <Button title="Нажми меня" onPress={handleIncrement} />
      <View style={{ marginTop: 20 }}>
        <Text>Введите ваше имя:</Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            borderColor: "gray",
            borderWidth: 1,
            marginTop: 10,
            paddingHorizontal: 10,
          }}
          value={name}
          onChangeText={handleNameChange}
        />
      </View>
      <Text style={{ marginTop: 20 }}>Привет, {name}!</Text>
    </View>
  );
};

export default Lab3;
