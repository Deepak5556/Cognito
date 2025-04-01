import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const { btnLoading, verifyOtp } = UserData();  // Ensure it's btnLoading, not bntLoading
  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (verifyOtp) {
      await verifyOtp(Number(otp), navigate); // Ensure otp is passed as a number
    } else {
      console.error("verifyOtp function is not available.");
    }
  };

  return (
    <div>
      <div className="d-flex vh-100 justify-content-center align-items-center bg-light px-3">
        <div
          className="card p-4 shadow"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h2 className="text-center mb-3">Verify OTP</h2>
          <form onSubmit={SubmitHandler}>
            {/* OTP */}
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">
                Enter OTP
              </label>
              <input
                type="tele" // Change from 'tele' to 'text'
                className="form-control"
                onChange={(e) => setOtp(e.target.value)}
                id="otp"
                value={otp}
                required
              />
              <button
                disabled={btnLoading} // Fix the typo here
                type="submit"
                className="btn primary-btn my-4 w-100"
              >
                {btnLoading ? "Please Wait" : "Verify"}
              </button>
            </div>
          </form>
          <p className="d-flex justify-content-center align-items-center">
            Go To{" "}
            <Link to="/login" className="px-1">
              Login
            </Link>{" "}
            Page
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
