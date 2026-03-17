import axios from "axios";
import { type ExerciseData } from "../components/exercises/types.ts";

const postExercise = async (token: string, exercise: ExerciseData["name"]) => {
  console.log(token, exercise);
  const response = await axios.post(
    "http://localhost:3337/api/exercises/",
    {name: exercise},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

export { postExercise };
