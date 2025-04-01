import React from "react";
import "../style/NavBar.css";
import { icons } from "../assets/icons";
import { UserData } from "../context/UserContext";


const NavBar = () => {
  const { user } = UserData(); 
  const { FaBell, IoPerson } = icons;

  return (
    <div className="navbar shadow-lg p-3 bg-body px-4 d-flex justify-content-between align-items-center">
      {/* Logo Section */}
      <div className="logo fs-4 fw-semibold">
        {/* Conditional Rendering for User Name */}
        {user && user.name ? `Welcome Back ${user.name}` : "Welcome!"}
      </div>

      {/* Icons Section */}
      <div className="list">
        <ul className="d-flex gap-3 align-items-center m-0 p-0">
          <li className="nav-item">
            <FaBell className="nav-icon" />
          </li>
          <li className="nav-item">
            <IoPerson className="nav-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
