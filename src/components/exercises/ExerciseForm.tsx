import { useState } from "react";
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
  const [exerciseName, setExerciseName] = useState<Exercise["name"]>("");

  // #######################
  // Order is hardcoded for now
  const [templateExercise, setTemplateExercise] = useState<
    Pick<TemplateExercise, "sets" | "order">
  >({ sets: 0, order: 5 });
  // #######################

  const { user } = useAuth();
  const token = user?.token || "";

  const handleSubmit = async () => {
    try {
      // #######################
      setTemplateExercise((prev) => ({ ...prev, order: 5 }));
      const addExercise = await postExercise(token, exerciseName);
      const exerciseId: Exercise["id"] = addExercise.id;
      const addTemplateExercise = await postTemplateExercise(
        templateId,
        exerciseId,
        token,
        templateExercise,
      );
      console.log(addTemplateExercise);
    } catch (error) {
      console.error("Failed to create exercise: ", error);
    }
  };

  return (
    <form>
      <label htmlFor="">1.</label>
      <label htmlFor="exerciseName">Name</label>
      <input
        type="text"
        name="name"
        className="bg-blue-200"
        onChange={(e) => setExerciseName(e.target.value)}
      />
      <label htmlFor="exerciseSets">Sets</label>
      <input
        type="number"
        min={0}
        max={10}
        className="w-12 bg-blue-200"
        name="sets"
        onChange={(e) =>
          setTemplateExercise((prev) => ({
            ...prev,
            sets: Number(e.target.value),
          }))
        }
      />
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

// <button className="text-2xl cursor-pointer">&uarr;</button>
// <button className="text-2xl cursor-pointer">&darr;</button>

export default ExerciseForm;
