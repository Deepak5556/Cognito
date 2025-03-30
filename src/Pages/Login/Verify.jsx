import React from "react";
import { Link } from "react-router-dom";
const Verify = () => {
  return (
    <div>
      <div className="d-flex vh-100 justify-content-center align-items-center bg-light px-3">
        <div
          className="card p-4 shadow"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h2 className="text-center mb-3">Login</h2>
          <form>
            {/* email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Enter OTP
              </label>
              <input type="tele" className="form-control" id="otp" required />
              <button className="btn primary-btn my-4 w-100">Login</button>
            </div>
          </form>
          <p className="d-flex justify-content-center align-items-center">Go To  <Link to='/login' className="px-1"> Login </Link>  Page</p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
