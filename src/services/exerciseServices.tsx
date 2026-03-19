import axios from "axios";
import type {
  Template,
  Exercise,
  TemplateExercise,
} from "../types/template.ts";

const postExercise = async (token: string, exercise: Exercise["name"]) => {
  const response = await axios.post(
    "http://localhost:3337/api/exercises/",
    { name: exercise },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

const postTemplateExercise = async (
  templateId: Template["id"],
  exerciseId: number,
  token: string,
  templateExercise: Pick<TemplateExercise, "sets" | "order">,
) => {
  const response = await axios.post(
    `http://localhost:3337/api/templates/${templateId}/exercises/${exerciseId}`,
    templateExercise,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

export { postExercise, postTemplateExercise };
