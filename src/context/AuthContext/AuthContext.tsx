import { createContext, useCallback, useEffect, useReducer } from "react";
import { AuthContextType } from "./AuthContextType";
import { User } from "@Types/User";
import { AuthReducer, AuthState } from "@Store/AuthReducer";
import { useLocalStorage } from "@Hooks/useLocalStorage";

const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { getItem, setItem, removeItem } = useLocalStorage<User>("user");

  const user = getItem();
  const [state, dispatch] = useReducer(AuthReducer, {
    user: user,
  } as AuthState);

  useEffect(() => {
    if (state.user) {
      setItem(state.user);
    } else {
      removeItem();
    }
  }, [state.user, setItem, removeItem]);

  const login = useCallback((user: User) => {
    dispatch({ type: "LOGIN", payload: user });
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
  }, []);

  const hasRole = useCallback(
    (role: string) => {
      return !!(state.user?.roles ?? []).includes(role);
    },
    [state.user]
  );

  const value: AuthContextType = {
    user: state.user,
    login,
    logout,
    hasRole,
    isAuthenticated: !!state.user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
