import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    return;
  });

  return <Outlet />;
};

export default ProtectedRoute;
