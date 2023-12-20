import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const Lab4 = () => {
  const [storageData, setStorageData] = useState("");
  useEffect(() => {
    async function getToken() {
      setStorageData(await AsyncStorage.getItem("token"));
    }
    getToken();
  });

  const getId = useSelector((state) => {
    console.log("state", state);
    return state.user.id;
  });
  const getUsername = useSelector((state) => {
    console.log("state", state);
    return state.user.username;
  });
  const getRole = useSelector((state) => {
    console.log("state", state);
    return state.user.role;
  });

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
      <Text>ID</Text>
      <Text>{getId}</Text>
      <Text>Username</Text>
      <Text>{getUsername}</Text>
      <Text>role</Text>
      <Text>{getRole}</Text>
      <Text>asyncstorageData</Text>
      <Text>{storageData}</Text>
    </View>
  );
};

export default Lab4;
