import React from "react";
import "../../style/Dashboard.css";
import DashCard from "../../pagecomponents/DashCard";
import DashCourses from "../../pagecomponents/DashCourses";

const Dashboard = () => {
  return (
    <>
      <div className="mt-6">
        <DashCard />
        <DashCourses />
      </div>
    </>
  );
};

export default Dashboard;
