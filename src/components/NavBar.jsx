import React from "react";
import "../style/NavBar.css";
import { icons } from "../assets/icons";

const NavBar = () => {
  const { FaBell, IoPerson } = icons;

  return (
    <div className="navbar shadow-lg p-3 bg-body px-4 d-flex justify-content-between align-items-center">
      {/* Logo Section */}
      <div className="logo fs-4 fw-semibold">
        Welcome Back Deepak!
      </div>

      {/* Icons Section */}
      <div className="list">
        <ul className="d-flex gap-3 align-items-center m-0 p-0">
          <li className="nav-item">
            <FaBell size="20px" />
          </li>
          <li className="nav-item">
            <IoPerson size="20px" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
