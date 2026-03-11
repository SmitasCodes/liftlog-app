import axios from "axios";
import {
  type TemplateData,
  type ExerciseData,
} from "../components/templates/types.ts";

const getTemplates = async (token: string) => {
  const response = await axios.get("http://localhost:3337/api/templates/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.templates;
};

const postTemplate = async (token: string, template: TemplateData) => {
  const response = await axios.post(
    "http://localhost:3337/api/templates/",
    template,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

const postExercise = async (token: string, exercise: ExerciseData) => {
  const response = await axios.post(
    "http://localhost:3337/api/exercises/",
    exercise,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

export { getTemplates, postTemplate, postExercise };
