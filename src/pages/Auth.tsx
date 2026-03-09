import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Auth = () => {
  const [loginActive, setLoginActive] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const activeCompText = loginActive ? "Create an account" : "Login instead";

  return (
    <>
      {loginActive ? <Login /> : <Register />}
      <button
        className="cursor-pointer"
        onClick={() => {
          setLoginActive(!loginActive);
        }}
      >
        {activeCompText}
      </button>
    </>
  );
};

export default Auth;
