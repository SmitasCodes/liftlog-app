import React, { type Dispatch, type SetStateAction } from "react";
import { useTemplate } from "../../context/TemplatesContext";
import { type Template } from "../../context/TemplatesContext";

const TemplatesList = ({
  setEditTemplate,
  setFormActive,
}: {
  setEditTemplate: Dispatch<SetStateAction<Template["id"] | null>>;
  setFormActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const { templates } = useTemplate();

  const handleEdit = (id: Template["id"]) => {
    setEditTemplate(id);
    setFormActive(true);
  };

  return (
    <ul>
      {templates.map(({ id, name }) => {
        return (
          <li
            key={id}
            className="bg-blue-600 mb-2 pl-2 py-0.5 flex justify-between"
          >
            <p>{name}</p>
            <button
              className="mr-4 cursor-pointer"
              onClick={() => handleEdit(id)}
            >
              Edit
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TemplatesList;
