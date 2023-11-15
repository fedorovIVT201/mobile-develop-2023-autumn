import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const Settings = () => {
  const nav = useNavigation();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <View style={styles.whitecontainer}>
        <Button
          title={"Logout"}
          onPress={() => {
            nav.replace("Login");
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  whitecontainer: {
    width: 316,
    height: 524,
    margin: 22,
    marginTop: 0,
    alignItems: "center",
    backgroundColor: "#ffff",
    borderRadius: 25,
  },
});
export default Settings;
