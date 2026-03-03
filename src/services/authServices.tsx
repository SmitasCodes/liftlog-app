import axios from "axios";
import type { LoginData, RegisterData } from "../components/auth/types.ts";

const loginService = async ({ username, password }: LoginData) => {
  const response = await axios.post("http://localhost:3337/api/users/login/", {
    username,
    password,
  });

  return response.data;
};

const registerService = async ({ username, email, password }: RegisterData) => {
  const response = await axios.post("http://localhost:3337/api/users/", {
    username,
    email,
    password,
  });
  
  return response.data;
};

export { loginService, registerService };
