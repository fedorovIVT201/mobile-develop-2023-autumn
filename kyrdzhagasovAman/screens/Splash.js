import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";



const Splash = () => {
  const nav = useNavigation();
  const expensiveCalculation = () => {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += 1;
    }
    return result;
  };
  useEffect(() => {
    expensiveCalculation()
    if (true) {
      nav.replace("Login");
    }
  });
  return <View><ActivityIndicator/></View>;
};

export default Splash;
