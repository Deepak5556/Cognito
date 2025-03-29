import React from "react";
import { useNavigate } from "react-router-dom";

const OnBoarding = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our E-learning Platform</h1>
          <p>Learn, Grow, Excel</p>
          <button onClick={() => navigate("/Dashboard")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
