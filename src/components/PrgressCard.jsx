import React from "react";

const MyCourseCard = ({ courses }) => {
  return (
    <div className="row px-5 py-3">
      {courses.map((course, index) => (
        <div key={index} className="p-4 col-3 px-5 mx-2 secondary-bg shadow-sm">
          <div className="title fw-bold">{course.code}</div>
          <div className="des">{course.title}</div>
          <div className="modules">{`${course.completedModules}/${course.totalModules} Modules`}</div>
          <div className="progress">
            <div
              className="progress-bar primary-bg"
              style={{ width: `${(course.completedModules / course.totalModules) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCourseCard;
