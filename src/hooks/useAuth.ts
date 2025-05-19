import { AuthContext } from "@Context/AuthContext/AuthContext";
import { AuthContextType } from "@Context/AuthContext/AuthContextType";
import { useContext } from "react";

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuthContext must be used within AuthProvider");

  return context;
};

export { useAuth };
