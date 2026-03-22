import React from "react";
import { type Template } from "../../context/TemplatesContext";
import ExerciseList from "./ExerciseList";
import ExerciseForm from "./ExerciseForm";

const Exercises = ({ templateId }: { templateId: Template["id"] }) => {
  console.log(templateId);
  return (
    <>
      <ExerciseList templateId={templateId} />
      <ExerciseForm templateId={templateId} />
    </>
  );
};

export default Exercises;
