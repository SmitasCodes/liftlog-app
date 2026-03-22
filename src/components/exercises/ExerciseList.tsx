import React from "react";
import { useTemplate } from "../../context/TemplatesContext";

const ExerciseList = () => {
  const { templates } = useTemplate();

  console.log(templates)
  return <div>ExerciseList</div>;
};

export default ExerciseList;
