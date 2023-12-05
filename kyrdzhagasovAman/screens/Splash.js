import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View } from "react-native";



const Splash = () => {
  const nav = useNavigation();
  useEffect(() => {
    if (true) {
      nav.replace("Login");
    }
  });
  return <View></View>;
};

export default Splash;
