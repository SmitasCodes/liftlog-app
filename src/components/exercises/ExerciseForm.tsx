import { useState } from "react";
import type {
  Template,
  Exercise,
  TemplateExercise,
} from "../../types/template.ts";
import { useTemplate } from "../../context/TemplatesContext.tsx";

const ExerciseForm = ({ templateId }: { templateId: Template["id"] }) => {
  const [exerciseName, setExerciseName] = useState<Exercise["name"]>("");
  const { addExercise } = useTemplate();
  const { filterTemplateExercises } = useTemplate();
  const [setsOrder, setSetsOrder] = useState<
    Pick<TemplateExercise, "sets" | "order">
  >({ sets: 0, order: 0 });

  const handleSubmit = async () => {
    const exerciseOrder = filterTemplateExercises(templateId).length + 1;
    const setsOrderData = { ...setsOrder, order: exerciseOrder };
    setSetsOrder(setsOrderData);
    await addExercise(exerciseName, templateId, setsOrderData);
  };

  return (
    <form className="flex justify-between bg-blue-400 rounded-lg px-1 py-0.5 items-center mb-2">
      {/* ################### */}
      {/* Harcoded right now , ideally i would want number to move with actual exercise count  */}
      {/* <label htmlFor="">1.</label> */}
      {/* ################### */}
      <label htmlFor="exerciseName">Name</label>
      <input
        type="text"
        name="name"
        className="bg-blue-200 rounded-md"
        onChange={(e) => setExerciseName(e.target.value)}
      />
      <label htmlFor="exerciseSets">Sets</label>
      <input
        type="number"
        min={0}
        max={10}
        className="w-12 bg-blue-200 rounded-md"
        name="sets"
        onChange={(e) =>
          setSetsOrder((prev) => ({
            ...prev,
            sets: Number(e.target.value),
          }))
        }
        value={setsOrder.sets}
      />
      <button
        className="bg-blue-600 px-2  cursor-pointer rounded-md"
        type="button"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
};

export default ExerciseForm;
