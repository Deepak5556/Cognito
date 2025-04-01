import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../layout/NavBar/NavBar";
import Loading from "./Loading/Loading";

const OnBoarding = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div>

      <NavBar/>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our E-learning Platform</h1>
          <p>Learn, Grow, Excel</p>

          {/* Corrected onClick handler */}
          <button onClick={() => navigate("/Home/Dashboard")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
