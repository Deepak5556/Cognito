import React from "react";
import MyCourseCard from "../components/PrgressCard";

const DashCourses = () => {
  const coursesData = [
    {
      code: "DYS",
      title: "Introduction to Git and GitHub",
      completedModules: 2,
      totalModules: 3,
    },
    {
      code: "JS101",
      title: "JavaScript Basics",
      completedModules: 1,
      totalModules: 5,
    },
    {
      code: "REACT",
      title: "React Fundamentals",
      completedModules: 3,
      totalModules: 4,
    },
  ];

  return (
    <>
      <div className="mt-4 ">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold">My Courses</h2>
          <button className="btn btn-link text-primary text-decoration-none fw-semibold">
            See More
          </button>
        </div>
        <div>
          <div>
            <MyCourseCard courses={coursesData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCourses;
