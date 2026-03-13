import { createContext, useCallback, useContext, type ReactNode } from "react";
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
  templates: Template[];
  loadTemplates: (template: Template[]) => void;
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
  const [templates, setTemplates] = useLocalStorage<Template[]>(
    "templates",
    [],
  );

  const loadTemplates = useCallback(
    (templates: Template[]) => {
      setTemplates(templates);
    },
    [setTemplates],
  );

  return (
    <TemplateContext.Provider value={{ templates, loadTemplates }}>
      {children}
    </TemplateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { TemplateProvider, useTemplate, type Template };
