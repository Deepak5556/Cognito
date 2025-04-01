import React from "react";
import CoursesBox from "./CoursesBox";
import { CourseData } from "../context/CourseContext";

const CoursesList = () => {
  const { courses } = CourseData();



  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses && courses.length > 0 ? (
          courses.map((e) => (
            <div className="col" key={e._id}>
              <CoursesBox course={e} />
            </div>
          ))
        ) : (
          <p className="text-center">No Courses Yet!</p>
        )}
      </div>
    </div>
  );
};

export default CoursesList;
