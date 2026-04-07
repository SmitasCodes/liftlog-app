import { type Template } from "../../types/template.ts";
import ExerciseList from "./ExerciseList";
import ExerciseForm from "./ExerciseForm";

const Exercises = ({ templateId }: { templateId: Template["id"] }) => {
  return (
    <div>
      <h2 className="text-center font-bold text-lg mb-1">Exercises</h2>
      <ExerciseForm templateId={templateId} />
      <ExerciseList templateId={templateId} />
    </div>
  );
};

export default Exercises;
