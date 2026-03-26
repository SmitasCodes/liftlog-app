import { createContext, useCallback, useContext, type ReactNode } from "react";
import { useLocalStorage } from "usehooks-ts";
import {
  type Exercise,
  type Template,
  type TemplateExercise,
} from "../types/template";
import { getTemplates, postTemplate } from "../services/templateServices";
import { useAuth } from "./AuthContext";
import {
  postExercise,
  postTemplateExercise,
} from "../services/exerciseServices";

interface TemplateContextType {
  templates: Template[];
  loadTemplates: () => void;
  addTemplate: (
    templateName: string,
  ) => Promise<Pick<Template, "id" | "name"> | null>;
  addExercise: (
    exerciseName: Exercise["name"],
    templateId: Template["id"],
    setsOrder: Pick<TemplateExercise, "sets" | "order">,
  ) => Promise<boolean>;
  filterTemplateExercises: (
    templateId: Template["id"],
  ) => (Pick<TemplateExercise, "id" | "sets" | "order"> & {
    exercise: Exercise;
  })[];
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
  const { user } = useAuth();
  const token = user?.token || "";

  const [templates, setTemplates] = useLocalStorage<Template[]>(
    "templates",
    [],
  );

  const loadTemplates = useCallback(async () => {
    try {
      const templates = await getTemplates(token);
      setTemplates(templates);
    } catch (error) {
      console.error("Failed to fetch templates: ", error);
    }
  }, [token, setTemplates]);

  const addTemplate = async (templateName: string) => {
    try {
      const template = await postTemplate(token, templateName);
      await loadTemplates();
      return { name: template.name, id: template.id };
    } catch (error) {
      console.error("Failed to create template", error);
      return null;
    }
  };

  const addExercise = async (
    exerciseName: Exercise["name"],
    templateId: Template["id"],
    setsOrder: Pick<TemplateExercise, "sets" | "order">,
  ) => {
    try {
      const exercise = await postExercise(token, exerciseName);
      const exerciseId: Exercise["id"] = exercise.id;
      await postTemplateExercise(templateId, exerciseId, token, setsOrder);
      await loadTemplates();
      return true;
    } catch (error) {
      console.error("Failed to create exercise: ", error);
      return false;
    }
  };

  const filterTemplateExercises = (templateId: Template["id"]) => {
    const templateExercises = templates.find(
      (template) => template.id === templateId,
    )?.templateExercises;

    console.log(templateExercises);

    return templateExercises ?? [];
  };

  return (
    <TemplateContext.Provider
      value={{
        templates,
        loadTemplates,
        addTemplate,
        addExercise,
        filterTemplateExercises,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { TemplateProvider, useTemplate };
