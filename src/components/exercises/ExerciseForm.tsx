import { useState, type ChangeEvent } from "react";
import {
  postExercise,
  postTemplateExercise,
} from "../../services/exerciseServices.tsx";
import { useAuth } from "../../context/AuthContext";
import type {
  Template,
  Exercise,
  TemplateExercise,
} from "../../types/template.ts";

const ExerciseForm = ({ templateId }: { templateId: Template["id"] }) => {
  const [exerciseName, setExerciseName] = useState<Exercise["name"] | null>(
    null,
  );

  const [templateExercise, setTemplateExercise] = useState<Pick<
    TemplateExercise,
    "sets" | "order"
  > | null>(null);

  const { user } = useAuth();
  const token = user?.token || "";

  const handleSubmit = async () => {
    try {
      const exercise = await postExercise(token, exerciseName);
      const exerciseId: Exercise["id"] = exercise.id;
      const templateExercise = await postTemplateExercise(
        templateId,
        exerciseId,
        token,
      );
      console.log(templateExercise);
    } catch (error) {
      console.error("Failed to create exercise: ", error);
    }
  };

  // Broken function need changing, leaving rn for testing
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setExerciseName(value);
  };

  return (
    <form>
      <label htmlFor="">1.</label>
      <label htmlFor="exerciseName">Name</label>
      <input
        type="text"
        name="name"
        className="bg-blue-200"
        onChange={handleChange}
      />
      <label htmlFor="exerciseSets">Sets</label>
      <input
        type="number"
        min={0}
        max={10}
        className="w-12 bg-blue-200"
        name="sets"
      />
      <button className="text-2xl cursor-pointer">&uarr;</button>
      <button className="text-2xl cursor-pointer">&darr;</button>
      <button
        className="bg-red-300 px-2 py-0.5 cursor-pointer"
        type="button"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
};

export default ExerciseForm;
