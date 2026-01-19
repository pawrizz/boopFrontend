import axios from "./axios";

export interface LoginPayload {
  email: string;
  password: string;
}

export const login = (payload: LoginPayload) => {
  return axios.post("/auth/login", payload);
};
