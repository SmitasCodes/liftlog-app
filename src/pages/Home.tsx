import { useEffect } from "react";
import Templates from "../components/Templates";
import { useAuth } from "../context/AuthContext";
import { getTemplates } from "../services/templateServices";
import { useTemplate } from "../context/TemplateContext";

const Home = () => {
  const { logOut, user } = useAuth();
  const { loadTemplate } = useTemplate();

  // Hardcoded for now
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImlhdCI6MTc3MTk0MzAwMiwiZXhwIjoxNzc0NTM1MDAyfQ.oKXiAmffR5rJVut-ZsASKhItCKlGypiguHM4x1PvObE";

  useEffect(() => {
    const fetchTemplates = async () => {
      const templates = await getTemplates(token);
      return templates;
    };

    const templates = fetchTemplates();

    loadTemplate(templates);
  }, [user, loadTemplate]);

  return (
    <div>
      <Templates />
      <button onClick={logOut} className="cursor-pointer">
        Log the fuck out
      </button>
    </div>
  );
};

export default Home;
