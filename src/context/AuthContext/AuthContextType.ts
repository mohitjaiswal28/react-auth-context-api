import { User } from "@Types/User";

export interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  hasRole: (role: string) => boolean;
}
