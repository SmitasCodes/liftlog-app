import axios from "axios";
import type { LoginData } from "../types/auth";

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

export { loginService };
