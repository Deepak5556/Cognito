import React from "react";
import deepak from "../assets/img/Deepak.png";

const CourseDetails = () => {
  return (
    <div>
      <div className="card">
        <div className="row mx-2 py-3">
          <div className="rounded-md ">
            <img
              src={deepak}
              alt="Deepak"
              height={300}
              width={300}
              className="br-5"
            />
          </div>
          <div className="details">
            <div className="mentor py-3">
              <p className="fs-4 m-0">Dr. Arul Antran Vijay</p>
              <div className=" m-0 fw-bold fs-3">
                ReactJS From Scratch-Basic
              </div>
              <div className="description m-0">
                <p className="m-0 my-1">
                  Learn React basics like components, props, state, hooks, and
                  routing. Build real-world projects, optimize performance, and
                  deploy your apps online!
                </p>
              </div>
              <div className="prices m-0">
                <s>₹1500</s>{" "}
                <span className="fw-bold fs-5 my-1">Just ₹ 499</span>
              </div>
              <div className="languages m-0 my-4">
                <h6>Languages : </h6>
                <ul>
                  <li>Tamil</li>
                  <li>English</li>
                  <li>French</li>
                  <li>Spanish</li>
                </ul>
              </div>
              <button className="btn primary-bg text-white fw-bold  my-1">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
