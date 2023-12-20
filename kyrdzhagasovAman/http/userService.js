import { $host } from "./api";
/*import jwt_decode from "jwt-decode";*/

export const login = async (username, password) => {
  try {
    const { data } = await $host.post("api/user/login", { username, password });
    /*console.log(jwt_decode(data.token))*/
    return data;
  } catch (err) {
    return err.response.data;
  }
};

export const registration = async (username, password, role) => {
  try {
    const { data } = await $host.post("api/user/registration", {
      username,
      password,
      role,
    });
    /*console.log(jwt_decode(data.token))*/
    return data;
  } catch (err) {
    return err.response.data;
  }
};
