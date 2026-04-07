import { useEffect, useState } from "react";
import { useTemplate } from "../../context/TemplatesContext";
import type { Template } from "../../types/template";

const ExerciseList = ({ templateId }: { templateId: Template["id"] }) => {
  const { filterTemplateExercises, templateExercises } = useTemplate();

  useEffect(() => {
    filterTemplateExercises(templateId);
    console.log('sdas')
  }, [templateId]);

  const moveOrderUp = (order: number) => {
    console.log(order);
  };

  const moveOrderDown = (order: number) => {
    console.log(order);
  };

  return (
    <ul>
      {templateExercises.map((exercise) => {
        return (
          <li className="flex justify-between items-center bg-blue-500 rounded-xl px-1.5 mb-2 py-0.5">
            <div className="flex items-center">
              <span>{exercise.exercise.name}</span>
              <span className="mx-2 text-xl">&bull;</span>
              <span>Sets: {exercise.sets}</span>
            </div>

            <div>
              <button
                className="text-xl cursor-pointer mr-2 bg-blue-700 px-1 rounded-lg"
                onClick={() => moveOrderUp(exercise.order)}
              >
                &uarr;
              </button>
              <button
                className="text-xl cursor-pointer bg-blue-800 px-1 rounded-lg"
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
