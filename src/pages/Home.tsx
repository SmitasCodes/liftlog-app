import { useEffect } from "react";
import Templates from "../components/templates/Templates";
import { useAuth } from "../context/AuthContext";
import { useTemplate } from "../context/TemplatesContext";

const Home = () => {
  const { logOut, user } = useAuth();
  const { loadTemplates, templates } = useTemplate();
  const token = user?.token || "";

  useEffect(() => {
    loadTemplates();
  }, [token, loadTemplates]);

  return (
    <>
      <Templates templates={templates} />
      {/* <button onClick={logOut} className="cursor-pointer">
        Log out
      </button> */}
    </>
  );
};

export default Home;
