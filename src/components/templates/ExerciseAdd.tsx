import { useState, type ChangeEvent } from "react";
import { postExercise } from "../../services/templateServices";
import { useAuth } from "../../context/AuthContext";
import { useTemplate } from "../../context/TemplateContext";

const ExerciseAdd = () => {
  const [exerciseData, setExerciseData] = useState({ name: "" });
  const { user } = useAuth();
  const token = user?.token || "";

  const handleSubmit = async () => {
    try {
      const exercise = await postExercise(token, exerciseData);
      console.log(exercise)
    } catch (error) {
      console.error("Failed to create exercise: ", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name } = e.target;
    const { value } = e.target;
    if (name == "exerciseName") {
      name = "name";
    }
    setExerciseData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <label className="font-bold">Exercises</label>
      <div>
        <label htmlFor="">1.</label>
        <label htmlFor="exerciseName">Name</label>
        <input
          type="text"
          name="exerciseName"
          className="bg-blue-200"
          onChange={handleChange}
        />
        {/* <label htmlFor="exerciseSets">Sets</label>
        <input type="number" min={0} max={10} className="w-12 bg-blue-200" />
        <button className="text-2xl cursor-pointer">&uarr;</button>
        <button className="text-2xl cursor-pointer">&darr;</button> */}
        <button
          className="bg-red-300 px-2 py-0.5 cursor-pointer"
          type="button"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default ExerciseAdd;
