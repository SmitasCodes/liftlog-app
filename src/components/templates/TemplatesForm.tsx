import { useEffect, useState, type ChangeEvent, type SubmitEvent } from "react";
import { useAuth } from "../../context/AuthContext";
import { getTemplate, postTemplate } from "../../services/templateServices";
import ExerciseAdd from "../exercises/ExerciseAdd";
import ExerciseList from "../exercises/ExerciseList";
import { type Template } from "../../context/TemplatesContext";

const TemplatesForm = ({
  templateId,
}: {
  templateId: Template["id"] | null;
}) => {
  const { user } = useAuth();
  const token = user?.token || "";
  const [formData, setFormData] = useState({ name: "" });
  const [editTemplateData, setEditTemplateData] = useState<Template[] | null>(
    null,
  );

  useEffect(() => {
    if (templateId !== null) {
      const fetchTemplate = async () => {
        const template = await getTemplate(templateId, token);
        setEditTemplateData(template);
      };

      fetchTemplate();
    }
  }, [token, templateId]);

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
      <label className="font-bold">Exercises</label>
      <ExerciseList />
      <ExerciseAdd />

      <div className="flex justify-end">
        <input type="submit" value="Add Template" className=" bg-red-200" />
      </div>
    </form>
  );
};

export default TemplatesForm;
