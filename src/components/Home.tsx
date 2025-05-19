import React from "react";
import { HOME_STYLES } from "@Styles/Home";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@Hooks/useAuth";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const goToProfile = () => {
    if (!user) {
      navigate("/login");
      return null;
    }

    navigate("/profile");
  };

  return (
    <div className={HOME_STYLES.container}>
      <div className={HOME_STYLES.card}>
        <div className="space-y-4">
          <button onClick={goToProfile} className={HOME_STYLES.button}>
            Go to Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
