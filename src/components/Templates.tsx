import { type Template } from "../context/TemplateContext";

const Templates = ({ templates }: { templates: Template[] }) => {
  return (
    <div className="bg-blue-300 w-96 p-2">
      <h2 className="mb-3">Templates</h2>
      <ul>
        {templates.map(({ name }) => {
          return (
            <li key={name} className="bg-blue-600 mb-2 pl-2 py-0.5">
              {name}
            </li>
          );
        })}
      </ul>

      {/* <div>
        <input type="text" />
        <button>Add Template</button>
      </div> */}
    </div>
  );
};

export default Templates;
