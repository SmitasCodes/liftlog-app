import axios from "axios";

const getTemplates = async (token: string) => {
  const response = await axios.get("http://localhost:3337/api/templates/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.templates;
};

export { getTemplates };
