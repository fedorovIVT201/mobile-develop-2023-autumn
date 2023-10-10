import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
} from "react-native";
import Button from "../components/Button";
import {
  useFonts,
  IBMPlexMono_400Regular,
} from "@expo-google-fonts/ibm-plex-mono";

const Lab1 = () => {
  let [fontsLoaded] = useFonts({
    IBMPlexMono_400Regular,
  });
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.blackcontainer}>
        <View style={styles.numbercontainer}>
          <Text
            style={{
              fontSize: 34,
              fontFamily: "IBMPlexMono_400Regular",
              color: "#F4D994",
            }}
          >
            {count}
          </Text>
        </View>
        <View style={styles.buttonontainer}>
          <Button title="+100" onPress={() => setCount(count + 100)} />
          <Button title="-100" onPress={() => setCount(count - 100)} />
          <Button title="-50" onPress={() => setCount(count - 50)} />
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: "#F7F6F1",
    alignItems: "center",
  },
  blackcontainer: {
    marginTop: 20,
    height: 380,
    width: 330,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#241808",
    borderRadius: 20,
  },
  buttoncontainer: {
    flex: 1,
    margin: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  numbercontainer: {
    flex: 1,
    marginTop: 64,
    alignItems: "center",
  },
});

export default Lab1;
