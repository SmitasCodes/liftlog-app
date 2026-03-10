import { useEffect } from "react";
import Templates from "../components/Templates";
import { useAuth } from "../context/AuthContext";
import { getTemplates } from "../services/templateServices";
import { useTemplate } from "../context/TemplateContext";

const Home = () => {
  const { logOut, user } = useAuth();
  const { loadTemplates, templates } = useTemplate();
  // Hardcoded for now
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImlhdCI6MTc3MTk0MzAwMiwiZXhwIjoxNzc0NTM1MDAyfQ.oKXiAmffR5rJVut-ZsASKhItCKlGypiguHM4x1PvObE";

  useEffect(() => {
    const fetchTemplates = async () => {
      const templates = await getTemplates(token);
      loadTemplates(templates);
    };

    fetchTemplates();
  }, [user, loadTemplates]);

  return (
    <>
      <Templates templates={templates} />
      <button onClick={logOut} className="cursor-pointer">
        Log the fuck out
      </button>
    </>
  );
};

export default Home;
