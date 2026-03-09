import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { TemplateProvider } from "./context/TemplateContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <TemplateProvider>
        <App />
      </TemplateProvider>
    </AuthProvider>
  </StrictMode>,
);
