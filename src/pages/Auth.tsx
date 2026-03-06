import { useNavigate } from "react-router";
import Login from "../components/auth/Login";
import { useAuth } from "../context/AuthContext";
// import Register from "../components/auth/Register";

const Auth = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user) {
    navigate("/home");
  }
  return (
    <>
      <Login />
    </>
  );
};

export default Auth;
