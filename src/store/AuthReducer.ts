import { User } from "@Types/User";

export type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

export type AuthState = {
  user: User | null;
};

export const initialAuthState: AuthState = {
  user: null,
};

export const AuthReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};
