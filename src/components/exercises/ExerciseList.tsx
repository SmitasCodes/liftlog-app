import React, { useEffect, useState } from "react";
import { useTemplate } from "../../context/TemplatesContext";
import type { Template } from "../../types/template";

const ExerciseList = ({ templateId }: { templateId: Template["id"] }) => {
  const { filterTemplateExercises } = useTemplate();

  const filteredExercises = templateId
    ? filterTemplateExercises(templateId)
    : [];

  return (
    <ul>
      {filteredExercises.map((exercise) => {
        return (
          <li className="flex justify-between">
            <span>{exercise.exercise.name}</span>
            <span>Sets: {exercise.sets}</span>
            <span>Order: {exercise.order}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ExerciseList;
