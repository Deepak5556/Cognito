import React, { useState } from "react";

const LoginPage = () => {
  const [activeRole, setActiveRole] = useState("teacher");
  return (
    <div>
      <div className="row ">
        <div className="col-6 secondary-bg">
          <div className="container m-5 p-5">
            <h1>Welcome To Cognito</h1>
            <div className="flex justify-center items-center h-screen bg-gray-100">
              <div className="flex bg-white shadow-md rounded-lg p-2">
                {/* Teacher Button */}
                <button
                  className={`px-6 py-2 text-lg font-medium rounded-l-lg transition ${
                    activeRole === "teacher"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActiveRole("teacher")}
                >
                  Teacher
                </button>

                {/* Student Button */}
                <button
                  className={`px-6 py-2 text-lg font-medium rounded-r-lg transition ${
                    activeRole === "student"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActiveRole("student")}
                >
                  Student
                </button>
              </div>

              {/* Display Selected Role */}
              <div className="mt-6 text-lg font-semibold text-gray-700">
                Selected Role:{" "}
                {activeRole === "teacher" ? "👨‍🏫 Teacher" : "🎓 Student"}
              </div>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <form>
              <label> Email</label>
            </form>
          </div>
        </div>
        <div className="col-6 primary-bg">
          <div className="container">
            <ul>
              <li>Welcom</li>
              <li>to our New E-Learning</li>
              <li>Website</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
  