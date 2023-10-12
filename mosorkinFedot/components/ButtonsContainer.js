import React from "react";
import { StyleSheet, View } from "react-native";
import SizeButton from "./buttons/SizeButton";

export default function ButtonsContainer({
  decreaseImageSize,
  increaseImageSize,
}) {
  return (
    <View style={styles.buttonsContainer}>
      <SizeButton
        style={styles.sizeButtons}
        onPress={decreaseImageSize}
        text="-"
      />
      <SizeButton
        style={styles.sizeButtons}
        onPress={increaseImageSize}
        text="+"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 300,
    position: "absolute",
    bottom: 80,
  },
  sizeButtons: {
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "orange",
    marginHorizontal: 10,
  },
});
