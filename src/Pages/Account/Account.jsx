import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { setIsAuth, setUser, user } = UserData(); // Destructure user from context
  const navigate = useNavigate();

  // Retrieve user data from localStorage and parse it into an object

  // If userD is null or doesn't have necessary properties, show login message
  if (!user || !user.name || !user.email || !user.role) {
    return <div>Please log in to access your profile.</div>;
  }

  // Logout handler
  const logoutHandler = () => {
    localStorage.clear();
    setUser(null); // Reset the user in context
    setIsAuth(false); // Update authentication state
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <div className="profile card flex justify-content-center alin-item-center m-5 p-3">
      <h2>My Profile</h2>
      <div className="profile-info">
        <p>
          <strong>Name - {user.name}</strong>
        </p>
        <p>
          <strong>Email - {user.email}</strong>
        </p>

        <button
          onClick={() => navigate(`/Home/dashboard/`)}
          className="common-btn"
        >
          <MdDashboard />
          Dashboard
        </button>

        <br />

        {user.role === "admin" && (
          <button
            onClick={() => navigate(`/admin/dashboard`)}
            className="common-btn"
          >
            <MdDashboard />
            Admin Dashboard
          </button>
        )}

        <br />

        <button onClick={logoutHandler} className="common-btn primary-btn px-2 primary-border">
          <IoMdLogOut />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
