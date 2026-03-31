import { useTemplate } from "../../context/TemplatesContext";
import type { Template } from "../../types/template";

const ExerciseList = ({ templateId }: { templateId: Template["id"] }) => {
  const { filterTemplateExercises } = useTemplate();

  const filteredExercises = templateId
    ? filterTemplateExercises(templateId)
    : [];

  const moveOrderUp = (order: number) => {};

  const moveOrderDown = (order: number) => {};

  return (
    <ul>
      {filteredExercises.map((exercise) => {
        return (
          <li className="flex justify-between items-center bg-blue-500 rounded-xl px-1.5 py-0.5 mb-2">
            <span>{exercise.exercise.name}</span>
            <span>Sets: {exercise.sets}</span>
            <div>
              <button
                className="text-2xl cursor-pointer mr-2"
                onClick={() => moveOrderUp(exercise.order)}
              >
                &uarr;
              </button>
              <button
                className="text-2xl cursor-pointer"
                onClick={() => moveOrderDown(exercise.order)}
              >
                &darr;
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ExerciseList;
