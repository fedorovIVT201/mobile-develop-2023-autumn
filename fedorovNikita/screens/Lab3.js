import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const Lab3 = () => {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);

    const factorial = useMemo(() => factorialOf(number), [])
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection:'column',
    alignItems:'center'
  },
  date: {
    justifyContent: 'center',
    flexDirection:'row',
    alignItems:'center'
  },
  image: {
    height: 30,
    width: 30,
  },
  space: {
    width: 20,
    height: 20,
  },
});

export default Lab2;