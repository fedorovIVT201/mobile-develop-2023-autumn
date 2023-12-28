import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={{ alignItems: 'center', marginTop: 50 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Счетчик: {count}</Text>
      <Button title="Увеличить" onPress={increment} />
      <Button title="Уменьшить" onPress={decrement} style={{ marginTop: 10 }} />
    </View>
  );
};

export default Counter;