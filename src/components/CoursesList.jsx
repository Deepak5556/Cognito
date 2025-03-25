import React from "react";
import CoursesBox from "./CoursesBox";
import deepak from "../assets/img/Deepak.png";

const CoursesList = () => {
  const courses = [
    {
      title: "ReactJS From Scratch - Basic",
      rating: 4.3,
      instructor: "Dr. Antrim Vijay",
      price: 500,
      thumbnail: deepak,
    },
    {
      title: "ReactJS With Tailwind CSS - Basic",
      rating: 4.7,
      instructor: "Dr. Antrim Vijay",
      price: 800,
      thumbnail: deepak,
    },
    {
      title: "Next.js From Scratch - Basic",
      rating: 4.6,
      instructor: "Dr. Antrim Vijay",
      price: 500,
      thumbnail: deepak,
    },
    {
      title: "ReactJS From Scratch - Basic",
      rating: 4.3,
      instructor: "Dr. Antrim Vijay",
      price: 800,
      thumbnail: deepak,
    },
    {
      title: "ReactJS With Tailwind CSS - Basic",
      rating: 4.7,
      instructor: "Dr. Antrim Vijay",
      price: 1500,
      thumbnail: deepak,
    },
    {
      title: "Next.js From Scratch - Basic",
      rating: 4.6,
      instructor: "Dr. Antrim Vijay",
      price: 500,
      thumbnail: deepak,
    },
    {
      title: "ReactJS From Scratch - Basic",
      rating: 4.3,
      instructor: "Dr. Antrim Vijay",
      price: 500,
      thumbnail: deepak,
    },
    {
      title: "ReactJS With Tailwind CSS - Basic",
      rating: 4.7,
      instructor: "Dr. Antrim Vijay",
      price: 500,
      thumbnail: deepak,
    },
    {
      title: "Next.js From Scratch - Basics",
      rating: 4.6,
      instructor: "Dr. Antrim Vijay",
      price: 500,
      thumbnail: deepak,
    },
  ];

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          {courses.map((course, index) => (
            <div className="col-md-4" key={index}>
              <CoursesBox
                title={course.title}
                rating={course.rating}
                instructor={course.instructor}
                price={course.price}
                thumbnail={course.thumbnail}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
