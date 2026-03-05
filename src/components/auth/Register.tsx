import { useState, type ChangeEvent, type SubmitEvent } from "react";
import AuthLayout from "./AuthLayout";
import { type RegisterData } from "./types";
import { registerService } from "../../services/authServices";

const Register = () => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await registerService(registerData);
      localStorage.setItem("user", JSON.stringify(user));
    } catch {
      setError("Invalid credentials or username, email already exist.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <AuthLayout title={"Sign up to Liftlog"}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={registerData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p>{error}</p>}
        {loading && <p>Loading place holder</p>}
        <input type="submit" value="Sign up" className="cursor-pointer" />
        <button>Login</button>
      </form>
    </AuthLayout>
  );
};

export default Register;
