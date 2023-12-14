import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const Lab4 = () => {
  const [storageData, setStorageData] = useState("");
  useEffect(() => {
    async function asd() {
      setStorageData(await AsyncStorage.getItem("token"));
    }
    asd();
  });
  const count = useSelector((state) => {
    console.log("state", state);
    return state.accessToken;
  });

  console.log(count);
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
      <Text>reduxData</Text>
      <Text>{count}</Text>
      <Text>asyncstorageData</Text>
      <Text>{storageData}</Text>
    </View>
  );
};

export default Lab4;
