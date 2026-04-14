import { useTemplate } from "../../context/TemplatesContext";

const ExerciseList = () => {
  const { currentExercises, setTemplates, activeTemplateId } =
    useTemplate();

  const updateOrder = (exerciseId: number, dir: "up" | "down") => {
    setTemplates((prevTemplates) => {
      return prevTemplates.map((template) => {
        if (template.id !== activeTemplateId) return template;
        if (template.templateExercises === undefined) return template;
        const newExercise = template.templateExercises.map((ex) => {
          if (ex.id === exerciseId) {
            const adjustment = dir === "up" ? 1 : -1;
            return { ...ex, order: ex.order + adjustment };
          }
          return ex;
        });

        return { ...template, templateExercises: newExercise };
      });
    });
  };
  console.log("Rerendering ExerciseList", currentExercises)
  return (
    <ul>
      {currentExercises.map((exercise) => {
        return (
          <li className="flex justify-between items-center bg-blue-500 rounded-xl px-1.5 mb-2 py-0.5" key={exercise.id}>
            <div className="flex items-center">
              <span>{exercise.exercise.name}</span>
              <span className="mx-2 text-xl">&bull;</span>
              <span>Sets: {exercise.sets}</span>
            </div>

            <div>
              <button
                className="text-xl cursor-pointer mr-2 bg-blue-700 px-1 rounded-lg"
                onClick={() => updateOrder(exercise.id, "up")}
              >
                &uarr;
              </button>
              <button
                className="text-xl cursor-pointer bg-blue-800 px-1 rounded-lg"
                onClick={() => updateOrder(exercise.id, "down")}
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
