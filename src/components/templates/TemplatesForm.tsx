import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useAuth } from "../../context/AuthContext";
import { postTemplate } from "../../services/templateServices";
import ExerciseAdd from "./ExerciseAdd";

const TemplatesForm = () => {
  const { user } = useAuth();
  const token = user?.token || "";
  const [formData, setFormData] = useState({ name: "" });

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    try {
      const template = await postTemplate(token, formData);
    } catch (error) {
      console.error("Failed to create template", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Template */}
      <div className="pb-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="bg-blue-200"
          onChange={handleChange}
        />
      </div>

      {/* Exercise addition */}
      <ExerciseAdd />

      <div className="flex justify-end">
        <input type="submit" value="Add Template" className=" bg-red-200" />
      </div>
    </form>
  );
};

export default TemplatesForm;
