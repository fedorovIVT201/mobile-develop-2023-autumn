import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = () => {
  const nav = useNavigation();

  useEffect(() => {
    if (AsyncStorage?.getItem("token")) {
      console.log(AsyncStorage.getItem("token"));
      nav.replace("Tab");
    } else {
      nav.replace("Login");
    }
  });
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default Splash;
