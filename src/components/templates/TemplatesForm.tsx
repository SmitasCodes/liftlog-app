import { useEffect, useState, type ChangeEvent, type SubmitEvent } from "react";
import { useAuth } from "../../context/AuthContext";
import { type Template } from "../../types/template";
import Exercises from "../exercises/Exercises";
import { useTemplate } from "../../context/TemplatesContext";

const TemplatesForm = ({
  templateId,
}: {
  templateId: Template["id"] | null;
}) => {
  const { user } = useAuth();
  const token = user?.token || "";
  const { addTemplate, setActiveTemplateId, activeTemplateId } = useTemplate();
  const [template, setTemplate] = useState<Pick<Template, "id" | "name">>({
    id: 0,
    name: "",
  });

  // ###########################
  // Broken will need a fix for it. EDITING FUNCTIONALITY BLOCK
  // ###########################
  // useEffect(() => {
  //   if (templateId !== null) {
  //     const fetchTemplate = async () => {
  //       const template = await getTemplate(templateId, token);
  //       setTemplateName(template.name);
  //     };
  //     fetchTemplate();
  //   }
  // }, [token, templateId]);

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const templateAdd = await addTemplate(template.name);
    if (templateAdd === null) {
      setTemplate({ name: "", id: 0 });
    } else {
      setTemplate(templateAdd);
      setActiveTemplateId(templateAdd.id);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-between flex-wrap">
        <div className="bg-blue-500 py-1 rounded-lg mb-2 w-full flex justify-between px-1">
          <label htmlFor="name" className="mr-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className={`bg-blue-200 pl-1.5 rounded-md`}
            onChange={(e) => {
              setTemplate((prev) => ({ ...prev, name: e.target.value }));
            }}
            value={template.name}
            disabled={activeTemplateId !== 0}
          />
        </div>

        {!activeTemplateId && (
          <button
            type="submit"
            className="bg-blue-600 cursor-pointer ml-auto rounded-md py-0.5 px-1"
          >
            Add template
          </button>
        )}
      </form>
      {activeTemplateId !== 0 && <Exercises/>}
    </>
  );
};

export default TemplatesForm;
