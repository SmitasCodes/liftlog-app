import { createContext, useContext, type ReactNode } from "react";
import { useLocalStorage } from "usehooks-ts";

interface Template {
  id: number;
  name: string;
  templateExercises?: TemplateExercise[];
}

interface TemplateExercise {
  id: number;
  order: number;
  sets: number;
  exercise: Exercise;
}

interface Exercise {
  id: number;
  name: string;
}

interface TemplateContextType {
  template: Template | null;
  loadTemplate: (template: Template) => void;
}

const TemplateContext = createContext<TemplateContextType | undefined>(
  undefined,
);

const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplate hook must be used inside TemplateProvider");
  }
  return context;
};

const TemplateProvider = ({ children }: { children: ReactNode }) => {
  const [template, setTemplates] = useLocalStorage<Template | null>(
    "template",
    null,
  );

  const loadTemplates = (template: Template) => {
    setTemplates(template);
  };

  return (
    <TemplateContext.Provider value={{ template, loadTemplates }}>
      {children}
    </TemplateContext.Provider>
  );
};

export { TemplateProvider, useTemplate };
