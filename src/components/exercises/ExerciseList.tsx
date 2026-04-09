import { useTemplate } from "../../context/TemplatesContext";

const ExerciseList = () => {
  const { currentExercises, templates, setTemplates } = useTemplate();

  const moveOrderUp = (order: number, id: number) => {
    const testas = currentExercises.find((exercise) => exercise.id === id);
    if (testas) testas.order++;
    console.log(templates)
    setTemplates((prev) =>({...prev, templateExercise}))
  };

  const moveOrderDown = (order: number) => {
    console.log(order);
  };
  console.log(currentExercises);
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
                onClick={() => moveOrderUp(exercise.order, exercise.id)}
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
