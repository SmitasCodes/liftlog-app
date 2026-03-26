import { type Template } from "../../types/template.ts";
import ExerciseList from "./ExerciseList";
import ExerciseForm from "./ExerciseForm";

const Exercises = ({ templateId }: { templateId: Template["id"] }) => {
  return (
    <>
      <ExerciseList templateId={templateId} />
      <ExerciseForm templateId={templateId} />
    </>
  );
};

export default Exercises;
