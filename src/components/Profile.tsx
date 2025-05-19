import React, { useEffect } from "react";
import { useAuth } from "@Hooks/useAuth";
import { PROFILE_STYLES } from "@Styles/Profile";

const Profile: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = "/login";
    }
  }, [isAuthenticated]);

  const logutUser = () => {
    logout();
  };

  return (
    <div className={PROFILE_STYLES.container}>
      {isAuthenticated ? (
        <div className={PROFILE_STYLES.card}>
          <h1 className={PROFILE_STYLES.heading}>Welcome, {user?.name}!</h1>
          <p className={PROFILE_STYLES.roleText}>
            Role:{" "}
            <span className={PROFILE_STYLES.roleHighlight}>
              {(user?.roles ?? []).join(", ")}
            </span>
          </p>
          <button onClick={logutUser} className={PROFILE_STYLES.logoutButton}>
            Logout
          </button>
        </div>
      ) : (
        <h1 className={PROFILE_STYLES.notLoggedIn}>You are not logged in</h1>
      )}
    </div>
  );
};

export default Profile;
