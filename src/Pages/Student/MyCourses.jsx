import React from "react";
import MyCoursesCard from "../../components/MyCoursesCard";
import deepak from "../../assets/img/Deepak.png";

const MyCourses = () => {
  const courses = [
    {
      title: "ReactJS From Scratch - Basic",
      rating: 4.3,
      instructor: "Dr. Antrim Vijay",
      progress: 4,
      total: 5,
      thumbnail: deepak,
      to: "/CoursesDetails",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>My Courses</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {courses.map((course, index) => (
          <MyCoursesCard
            key={index}
            titl e={course.title}
            rating={course.rating}
            instructor={course.instructor}
            progress={course.progress}
            total={course.total}
            thumbnail={course.thumbnail}
            to={course.to}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
