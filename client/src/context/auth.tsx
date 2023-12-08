import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function useAuth() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setIsAuthenticated(true);
  }, []);

  function login() {
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    navigate("/login");
  }

  return {
    isAuthenticated,
    login,
    logout,
  };
}

interface Props {
  children: JSX.Element;
}

function AuthProvider({ children }: Props) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
  return useContext(AuthContext);
}

// eslint-disable-next-line
export { AuthProvider, useAuthContext };
