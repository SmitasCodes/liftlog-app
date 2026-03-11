import { useState } from "react";
import { type Template } from "../context/TemplateContext";
import TemplatesForm from "./TemplatesForm";

const Templates = ({ templates }: { templates: Template[] }) => {
  const [formActive, setFormActive] = useState(false);
  return (
    <div className="bg-blue-300 w-120 p-2 ">
      <h2 className="mb-1 text-xl font-bold text-center">Templates</h2>
      {!formActive ? (
        templates.length == 0 ? (
          <p>Templates is empty</p>
        ) : (
          <ul>
            {templates.map(({ id, name }) => {
              return (
                <li key={id} className="bg-blue-600 mb-2 pl-2 py-0.5">
                  {name}
                </li>
              );
            })}
          </ul>
        )
      ) : (
        <TemplatesForm />
      )}

      {/* Will need fix */}
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
