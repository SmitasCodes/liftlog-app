import { useTemplate } from "../../context/TemplatesContext";

const ExerciseList = () => {
  const { currentExercises } = useTemplate();

  const moveOrderUp = (order: number) => {
    console.log(order);
  };

  const moveOrderDown = (order: number) => {
    console.log(order);
  };

  return (
    <ul>
      {currentExercises.map((exercise) => {
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
