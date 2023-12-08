import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/reacy-query";
import { AuthProvider } from "./context/auth";
import { AppRoutes } from "./app-routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
