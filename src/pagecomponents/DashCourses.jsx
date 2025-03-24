import React from "react";
import MyCourseCard from "../components/PrgressCard";

const DashCourses = () => {
  return (
    <>
      <div className="mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold">My Courses</h2>
          <button className="btn btn-link text-primary text-decoration-none fw-semibold">
            See More
          </button>
        </div>
        <div>
          <div className="card">
            <MyCourseCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCourses;
