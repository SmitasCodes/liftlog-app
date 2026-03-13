import { useState } from "react";
import { type Template } from "../../context/TemplatesContext";
import TemplatesForm from "./TemplatesForm";
import TemplatesList from "./TemplatesList";

const Templates = ({ templates }: { templates: Template[] }) => {
  const [formActive, setFormActive] = useState<boolean>(false);
  const [editTemplate, setEditTemplate] = useState<Template["id"] | null>(null);

  return (
    <div className="bg-blue-300 w-120 p-2 ">
      <h2 className="mb-1 text-xl font-bold text-center">Templates</h2>
      {!formActive ? (
        templates.length == 0 ? (
          <p>Templates is empty</p>
        ) : (
          <TemplatesList
            setEditTemplate={setEditTemplate}
            setFormActive={setFormActive}
          />
        )
      ) : (
        <TemplatesForm templateId={editTemplate} />
      )}

      {/* Will need fix later*/}
      {!formActive && (
        <div className="flex justify-end">
          <button
            className="bg-blue-500 w-10 h-10 rounded-full cursor-pointer text-3xl flex justify-center items-center"
            onClick={() => setFormActive(true)}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Templates;
