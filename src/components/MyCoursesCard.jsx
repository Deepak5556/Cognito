import React from "react";
import { Link } from "react-router-dom";
const MyCoursesCard = ({
  title,
  rating,
  instructor,
  progress,
  total,
  thumbnail,
  to
}) => {
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
      }}
    >
      <div className="card-body" style={{ padding: "8px" }}>
        <img
          src={thumbnail}
          alt="Course Image"
          style={{
            width: "100%",
            height: "12rem",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
          }}
        />
        <h5
          className="card-title pt-2"
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            // marginBottom: "15px",
          }}
        >
          {title}
        </h5>
        {/* <h6
          className="card-subtitle mb-2 text-muted"
          style={{ fontSize: "0.9rem", color: "#666" }}
        >
          Rating: {rating}/5
        </h6> */}
        <p
          className="card-text"
          style={{ fontSize: "0.9rem", color: "#333", marginBottom: "0px" }}
        >
          Instructor: {instructor}
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
          Completed : {(progress / total) * 100}%
        </p>
        <Link
          to={to}
          className="btn btn-success fw-bold py-2"
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
          Open
        </Link>
      </div>
    </div>
  );
};

export default MyCoursesCard;
