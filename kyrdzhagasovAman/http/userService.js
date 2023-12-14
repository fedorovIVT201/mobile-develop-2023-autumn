import { $host } from "./api";
/*import jwt_decode from "jwt-decode";*/
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = async (username, password) => {
  try {
    const { data } = await $host.post("api/user/login", { username, password });
    /*console.log(jwt_decode(data.token))*/
    console.log(data);
    return data;
  } catch (err) {
    return err.response.data;
  }
};
