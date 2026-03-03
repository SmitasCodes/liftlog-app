import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { type LoginData } from "./types.ts";
import { loginService } from "../../services/authServices.tsx";
import AuthLayout from "./AuthLayout.tsx";

const Login = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: "demo",
    password: "demo",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await loginService(loginData);
      localStorage.setItem("user", JSON.stringify(user));
    } catch {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(Testas);

  return (
    <AuthLayout title="Log into Liftlog">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p>{error}</p>}
        {loading && <h2>Loading placeholder</h2>}
        <input type="submit" value="Log in" className="cursor-pointer" />
        <button>Sign up</button>
      </form>
    </AuthLayout>
  );
};

export default Login;
