import React from "react";

const MyCourseCard = () => {
  return (
    <div>
      <div className="row">
        <div className="p-4 col-3 px-5  ">
          <div className="title fw-bold">DYS</div>
          <div className="des ">Introduction to Git and GitHub</div>
          <div className="modules">2/3 Modules</div>
          <div className="progress">
            <div className="progress-bar primary-bg" style={{ width: "75%" }}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourseCard;
