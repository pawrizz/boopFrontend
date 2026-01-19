import axios from "./axios";

export const login = (payload) => {
  return axios.post("/auth/login", payload);
};
