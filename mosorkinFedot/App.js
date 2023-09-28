import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [imageSize, setImageSize] = useState(100);
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  const handleColorButtonClick = () => {
    setBackgroundColor(generateRandomColor());
  };

  const increaseImageSize = () => {
    const newSize = imageSize + 50;

    if (newSize <= 350) {
      setImageSize(imageSize + 50);
    }
  };
  const decreaseImageSize = () => {
    const newSize = imageSize - 50;

    if (newSize >= 50) {
      setImageSize(imageSize - 50);
    }
  };

  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <View style={styles.container(backgroundColor)}>
      <Image
        source={require("./imgs/logo1.png")}
        style={{ width: imageSize, height: imageSize }}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.sizeButtons}
          onPress={decreaseImageSize}
        >
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sizeButtons}
          onPress={increaseImageSize}
        >
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.changeColorButton}
        onPress={handleColorButtonClick}
      >
        <Image
          style={styles.changeColorImg}
          source={require("./imgs/chngcolor.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (backgroundColor) => ({
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  }),
  sizeButtons: {
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "orange",
    marginHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 300,
    position: "absolute",
    bottom: 80,
  },
  changeColorButton: {
    width: 50,
    height: 50,
    right: 30,
    position: "absolute",
    top: 80,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
  },
  changeColorImg: {
    width: 50,
    height: 50,
  },
  textButton: {
    fontSize: 32,
  },
});
