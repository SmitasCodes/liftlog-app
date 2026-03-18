interface Template {
  id: number;
  name: string;
  templateExercises?: TemplateExercise[];
}

interface Exercise {
  id: number;
  name: string;
}

interface TemplateExercise {
  id: number;
  order: number;
  sets: number;
  exerciseId: number;
  templateId: number;
}

export { type Template, type Exercise, type TemplateExercise };
