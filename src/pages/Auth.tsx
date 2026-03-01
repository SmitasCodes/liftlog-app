import { useState, type ChangeEvent } from "react";
import { type LoginData } from "../types/auth";
import { loginService } from "../services/authServices";

const Auth = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault();

    loginService(loginData);
  };

  return (
    // Login
    <div>
      <h2>Log into Liftlog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLoginData((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLoginData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <input type="submit" value="Log in" className="cursor-pointer" />
      </form>
    </div>
  );
};

export default Auth;
