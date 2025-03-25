import React from "react";
const CoursesBox = ({ title, rating, instructor, price, thumbnail }) => {
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
          className="card-title"
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          {title}
        </h5>
        <h6
          className="card-subtitle mb-2 text-muted"
          style={{ fontSize: "0.9rem", color: "#666" }}
        >
          Rating: {rating}/5
        </h6>
        <p
          className="card-text"
          style={{ fontSize: "0.9rem", color: "#333", marginBottom: "10px" }}
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
          Price: ${price}
        </p>
        <a
          href="#"
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
        </a>
      </div>
    </div>
  );
};

export default CoursesBox;
