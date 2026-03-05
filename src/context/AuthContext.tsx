import { createContext, useContext, type ReactNode } from "react";
import { useLocalStorage } from "../utils/useLocalStorage.tsx";

interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}

const AuthContext = createContext(undefined);

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);

  const signIn = ({ key: string }) => {};

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useLocalStorage("user", null);

//   const logOut = () => {
//     localStorage.removeItem("user");
//   };

//   useEffect(() => {}, [checkAuth]);

//   return <AuthContext.Provider value></AuthContext.Provider>;
// };
