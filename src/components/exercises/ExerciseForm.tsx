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
import { useTemplate } from "../../context/TemplatesContext.tsx";

const ExerciseForm = ({ templateId }: { templateId: Template["id"] }) => {
  const [exerciseName, setExerciseName] = useState<Exercise["name"]>("");
  const { addExercise } = useTemplate();

  // #######################
  // Order is hardcoded for now
  const [setsOrder, setSetsOrder] = useState<
    Pick<TemplateExercise, "sets" | "order">
  >({ sets: 0, order: 7 });
  // #######################

  const handleSubmit = async () => {
    await addExercise(exerciseName, templateId, setsOrder);
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
          setSetsOrder((prev) => ({
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
