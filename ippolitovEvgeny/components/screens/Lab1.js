import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from "react-native";

const Lab1 = ({ navigation }) => {
  const [bgColor, setBgColor] = useState("");

  const colorButton = (color) => {
    return (
      <TouchableOpacity
        style={[styles.colorChangeButton, { backgroundColor: color }]}
        onPress={() => setBgColor(color)}
      >
        <Text>{color}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.buttonContainer}>
        {colorButton("white")}
        {colorButton("red")}
        {colorButton("blue")}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  colorChangeButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: 100, // Set a fixed width for all buttons
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Lab1;