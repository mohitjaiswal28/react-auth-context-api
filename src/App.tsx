import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "@Context/AuthContext/AuthContext";
import privateRoutes from "@Ruotes/privateRoutes";
import publicRoutes from "@Ruotes/publicRoutes";

const routes = [...publicRoutes, ...privateRoutes];

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
