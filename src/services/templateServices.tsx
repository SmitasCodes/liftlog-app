import axios from "axios";
import type { Template } from "../types/template";

const getTemplates = async (token: string) => {
  const response = await axios.get("http://localhost:3337/api/templates/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.templates;
};

const postTemplate = async (token: string, templateName: Template["name"]) => {
  const response = await axios.post(
    "http://localhost:3337/api/templates/",
    { name: templateName },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

const getTemplate = async (templateId: Template["id"], token: string) => {
  const response = await axios.get(
    `http://localhost:3337/api/templates/${templateId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

export { getTemplates, getTemplate, postTemplate };
