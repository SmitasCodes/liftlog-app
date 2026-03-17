import { useState, type ChangeEvent } from "react";
import { postExercise } from "../../services/exerciseServices.tsx";
import { useAuth } from "../../context/AuthContext";
import type { ExerciseData } from "./types.ts";

const ExerciseForm = () => {
  const [formData, setFormData] = useState<ExerciseData>({
    name: "",
    sets: 0,
    order: 0,
  });

  const { user } = useAuth();
  const token = user?.token || "";

  const handleSubmit = async () => {
    try {
      if (!formData.name) return;
      const exercise = await postExercise(token, formData.name);
      console.log(exercise);
    } catch (error) {
      console.error("Failed to create exercise: ", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <label htmlFor="">1.</label>
      <label htmlFor="exerciseName">Name</label>
      <input
        type="text"
        name="name"
        className="bg-blue-200"
        onChange={handleChange}
      />
      <label htmlFor="exerciseSets">Sets</label>
      <input
        type="number"
        min={0}
        max={10}
        className="w-12 bg-blue-200"
        name="sets"
      />
      <button className="text-2xl cursor-pointer">&uarr;</button>
      <button className="text-2xl cursor-pointer">&darr;</button>
      <button
        className="bg-red-300 px-2 py-0.5 cursor-pointer"
        type="button"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
};

export default ExerciseForm;
