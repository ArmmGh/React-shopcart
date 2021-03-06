import { useHistory } from "react-router-dom";
import { authAPI } from "../../../api";
import { useAuth } from "../../../context/AuthContext";
import "./Profile.scss";

const Profile = () => {
  const { currentUser, profile } = useAuth();
  const history = useHistory();
  const handleLogout = async () => {
    try {
      await authAPI.logout();
      history.push("/products");
    } catch {
      // setError("Failed to log out");
    }
  };

  return (
    <>
      {profile && currentUser && (
        <div className="profile">
          <div className="avatar">
            <img src={profile.avatar} alt={profile.username} />
          </div>
          <div className="info">
            <p className="username">{profile.username}</p>
            <p className="email">{currentUser.email}</p>
            <button className="logout" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
