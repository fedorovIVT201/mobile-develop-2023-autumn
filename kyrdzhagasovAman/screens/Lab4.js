
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";


const Lab4 = () => {

    const count = useSelector((state) => {
        console.log(state)
         return state.accessToken
        });
        console.log(AsyncStorage.getItem("token"))
  return (
    <View
      style={{
        padding: 14,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>{count}</Text>
      <Text>{JSON.stringify(AsyncStorage.getItem("token"))}</Text>
    </View>
  );
};

export default Lab4;
