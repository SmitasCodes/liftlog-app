import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { type LoginData } from "./types.ts";
import { loginService } from "../../services/authServices.tsx";
import AuthLayout from "./AuthLayout.tsx";
import { useAuth } from "../../context/AuthContext.tsx";

const Login = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: "demo",
    password: "demo",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await loginService(loginData);
      signIn(user);
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
      </form>
    </AuthLayout>
  );
};

export default Login;
