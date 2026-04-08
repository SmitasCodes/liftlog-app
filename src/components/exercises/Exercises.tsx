import ExerciseList from "./ExerciseList";
import ExerciseForm from "./ExerciseForm";

const Exercises = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-lg mb-1">Exercises</h2>
      <ExerciseForm />
      <ExerciseList />
    </div>
  );
};

export default Exercises;
