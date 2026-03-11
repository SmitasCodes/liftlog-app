import { useEffect } from "react";
import Templates from "../components/Templates";
import { useAuth } from "../context/AuthContext";
import { getTemplates } from "../services/templateServices";
import { useTemplate } from "../context/TemplateContext";

const Home = () => {
  const { logOut, user } = useAuth();
  const { loadTemplates, templates } = useTemplate();
  const token = user?.token || "";

  useEffect(() => {
    const fetchTemplates = async () => {
      const templates = await getTemplates(token);
      loadTemplates(templates);
    };

    fetchTemplates();
  }, [token, loadTemplates]);

  return (
    <>
      <Templates templates={templates} />
      <button onClick={logOut} className="cursor-pointer">
        Log out
      </button>
    </>
  );
};

export default Home;
