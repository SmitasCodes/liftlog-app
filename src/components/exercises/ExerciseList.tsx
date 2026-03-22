import React, { useEffect } from "react";
import { useTemplate } from "../../context/TemplatesContext";
import type { Template } from "../../types/template";

const ExerciseList = ({ templateId }: { templateId: Template["id"] }) => {
  const { templates } = useTemplate();

  useEffect(() => {
    const templateExercises = templates.find(
      (template) => template.id === templateId,
    )?.templateExercises;

  }, [templateId, templates]);

  return <div>ExerciseList</div>;
};

export default ExerciseList;
