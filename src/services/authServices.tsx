import axios from "axios";
import type { LoginData, RegisterData } from "../types/auth";

const loginService = async ({ username, password }: LoginData) => {
  try {
    const response = await axios.post(
      "http://localhost:3337/api/users/login/",
      {
        username,
        password,
      },
    );

    if (response.data) {
      console.log("Great success");
      console.log(response.data);
    }

    return response.data;
  } catch (error) {
    console.error("Error when trying to login: ", error);
    return error;
  }
};

const registerService = async ({ username, email, password }: RegisterData) => {
  try {
    const response = await axios.post("http://localhost:3337/api/users/", {
      username,
      email,
      password,
    });

    if (response.data) {
      console.log(response.data);
    }
    return response;
  } catch (error) {
    console.error("Error when trying to register: ", error);
    return error;
  }
};

export { loginService, registerService };
