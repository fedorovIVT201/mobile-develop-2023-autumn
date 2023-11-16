import { StatusBar } from "expo-status-bar";
import React, { useMemo, useCallback, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const expensiveFunction = (Timer) => {
  let i = 0;
  while (i < 20000000) i++;
  return i;
};

const Lab3 = () => {
  const [num, setNum] = useState(0);
  const [memoNum, setMemoNum] = useState(0);
  const [callbackNum, setCallbackNum] = useState(0);

  const memorizeExpnesiveFunction = useMemo(
    () => expensiveFunction("fromUseMemo"),
    []
  );

  const memoIterate = () => {
    setMemoNum(memorizeExpnesiveFunction);
  };
  const iterate = () => {
    setNum(expensiveFunction("iterate without memo"));
  };

  const memorizedCallback = useCallback(() => {
    setCallbackNum(callbackNum + 1);
  }, [callbackNum]);

  const resetState = () => {
    setNum(0);
    setMemoNum(0);
    setCallbackNum(0);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.text}>number with memo: {memoNum}</Text>
      <Text style={styles.text}>number without memo: {num}</Text>
      <Text style={styles.text}>number from callback: {callbackNum}</Text>
      <Button onPress={memoIterate} title="expensiveFunc with memo" />
      <Button onPress={iterate} title="expensiveFunc without memo" />
      <Button onPress={memorizedCallback} title="counter using useCallback" />
      <Button onPress={resetState} title="reset" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
export default Lab3;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "silver",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    lineHeight: 35,
    height: 35,
    color: "#000",
    alignSelf: "center",
    fontSize: 16,
  },
});
