import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light px-3">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-3">Sign In</h2>
        <form>
          {/* name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          {/* email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          {/* password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
            />
          </div>
          {/* button */}
          <button className="btn primary-btn w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Don't Have an Account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
