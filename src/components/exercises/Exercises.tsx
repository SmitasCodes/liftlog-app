import React from "react";
import { type Template } from "../../context/TemplatesContext";
import ExerciseList from "./ExerciseList";
import ExerciseForm from "./ExerciseForm";

const Exercises = ({ templateId }: { templateId: Template["id"] }) => {
  return (
    <>
      <ExerciseList />
      <ExerciseForm templateId={templateId} />
    </>
  );
};

export default Exercises;
