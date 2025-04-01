import React from "react";
import "../NavBar/NavBar.css"
import { Link } from "react-router-dom";

const NavBar = ({ isAuth }) => {
  return (
    <header>
      <div className="logo primary">Cognito</div>

      <div className="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/Home/Courses"}>Courses</Link>
        <Link to={"/account"}>About</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default NavBar;