import { useEffect, useState, type ChangeEvent, type SubmitEvent } from "react";
import { useAuth } from "../../context/AuthContext";
import { getTemplate, postTemplate } from "../../services/templateServices";
import { type Template } from "../../types/template";
import Exercises from "../exercises/Exercises";

const TemplatesForm = ({
  templateId,
}: {
  templateId: Template["id"] | null;
}) => {
  const { user } = useAuth();
  const token = user?.token || "";
  const [templateName, setTemplateName] = useState<Template["name"]>("");
  const [template, setTemplate] = useState<Pick<
    Template,
    "id" | "name"
  > | null>(null);

  useEffect(() => {
    if (templateId !== null) {
      const fetchTemplate = async () => {
        const template = await getTemplate(templateId, token);
        setTemplateName(template.name);
      };
      fetchTemplate();
    }
  }, [token, templateId]);

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    try {
      const template = await postTemplate(token, templateName);
      setTemplate({ name: template.name, id: template.id });
    } catch (error) {
      console.error("Failed to create template", error);
    }
  };

  // FIX NEEDED
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTemplateName(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-between">
        <div>
          <label htmlFor="name" className="mr-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className={`bg-blue-200 pl-1.5`}
            onChange={handleChange}
            value={templateName}
            disabled={template !== null}
          />
        </div>

        {!template && (
          <button type="submit" className="bg-blue-500 px-0.5 cursor-pointer">
            Add template
          </button>
        )}
      </form>

      {template && <Exercises templateId={template.id} />}
    </>
  );
};


export default TemplatesForm;
