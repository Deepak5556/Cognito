import React from "react";
import load from "../../assets/img/Loading/Loading.gif";
const Loading = () => {
  return (
    <div>
      <img src={load} alt="loading" />
      {/* <div className="spinner-border primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div> */}
    </div>
  );
};

export default Loading;
