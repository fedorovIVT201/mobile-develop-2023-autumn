import { $host } from "./api";

export const login = async (username, password) => {
  try {
    const { data } = await $host.post("api/user/login", { username, password });
    return data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const registration = async (username, password, role) => {
  try {
    const { data } = await $host.post("api/user/registration", {
      username,
      password,
      role,
    });
    return data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
