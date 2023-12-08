import { useRoutes, Navigate } from "react-router-dom";
import { Hotels } from "./pages/hotels";
import { Login } from "./pages/login";
import { useAuthContext } from "./context/auth";

const protectedRoutes = [
  { path: "/hotels", element: <Hotels /> },
  { path: "*", element: <Navigate to="/hotels" /> },
];

const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "*", element: <Navigate to="/login" /> },
];

export function AppRoutes() {
  const auth = useAuthContext();
  const routes = auth?.isAuthenticated ? protectedRoutes : publicRoutes;
  const element = useRoutes(routes);

  return <>{element}</>;
}
