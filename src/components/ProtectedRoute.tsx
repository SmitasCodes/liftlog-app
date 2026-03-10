import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { TemplateProvider } from "../context/TemplateContext";

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

const HomeLayout = () => {
  return (
    <TemplateProvider>
      <Outlet />
    </TemplateProvider>
  );
};

export { ProtectedRoute, HomeLayout };
