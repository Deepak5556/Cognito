import React from "react";
import { server } from "..";
import { useNavigate } from "react-router-dom";
const CoursesBox = ({ course }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      style={{
        width: "22rem",
        margin: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s",
        ":hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <div className="card-body" style={{ padding: "10px" }}>
        <img
          src={`${server}/${course.image}`}
          alt="Course"
          style={{
            width: "100%",
            height: "12rem",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
          }}
        />
        <h5
          className="card-title"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "18px",
            marginTop: "15px",
          }}
        >
          {course.title}
        </h5>
        <h6
          className="card-subtitle mb-2 text-muted"
          style={{ fontSize: "0.9rem", color: "#666" }}
        >
          Category: {course.category}
        </h6>
        <p
          className="card-text"
          style={{ fontSize: "0.9rem", color: "#333", marginBottom: "10px" }}
        >
          Instructor: {course.createdBy}
        </p>
        <p
          className="card-text"
          style={{
            fontSize: "1rem",
            color: "#000",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Price: {course.price}
        </p>
        <button
          onClick={() => navigate(`/Home/CourseDetails/${course._id}`)}
          className="btn btn-success"
          style={{
            backgroundColor: "#4CB04F",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            fontSize: "0.9rem",
            color: "#fff",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CoursesBox;
