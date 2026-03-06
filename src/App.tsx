import { createBrowserRouter, RouterProvider } from "react-router";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  { index: true, path: "/", Component: Auth },
  {
    path: "home",
    Component: ProtectedRoute,
    children: [{ index: true, Component: Home }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
