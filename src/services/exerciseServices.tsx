import axios from "axios";
import { type ExerciseData } from "../components/exercises/types.ts";
import type { Template } from "../context/TemplatesContext.tsx";

const postExercise = async (token: string, exercise: ExerciseData["name"]) => {
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
) => {
  const response = await axios.post(
    `http://localhost:3337/api/templates/${templateId}/exercises/${exerciseId}`,
  );

  return response.data;
};

export { postExercise, postTemplateExercise };
