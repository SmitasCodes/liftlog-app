import React from "react";
import { type Template } from "../../context/TemplatesContext";
import ExerciseList from "./ExerciseList";
import ExerciseForm from "./ExerciseForm";

const Exercises = ({ templateId }: { templateId: Template["id"] }) => {
  return (
    <>
      <ExerciseForm />
      <ExerciseList />
    </>
  );
};

export default Exercises;
