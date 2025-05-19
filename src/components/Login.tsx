import React, { useState } from "react";
import { useAuth } from "@Hooks/useAuth";
import { User } from "@Types/User";
import { LOGIN_STYLES } from "@Styles/Login";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Using hardcoded user data for demonstration purposes
    const user: User = {
      id: "mohitjaiswal28",
      name: "Mohit Jaiswal",
      email,
      password,
      roles: ["user", "admin"],
      token: "mohitjaiswal28",
    };

    login(user);
    navigate("/profile");
  };

  return (
    <div className={LOGIN_STYLES.container}>
      <div className={LOGIN_STYLES.card}>
        <h1 className={LOGIN_STYLES.heading}>Login</h1>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={LOGIN_STYLES.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={LOGIN_STYLES.input}
          />
          <button onClick={handleLogin} className={LOGIN_STYLES.button}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
