import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Student/Dashboard";
import Courses from "../Pages/Student/Courses";
import Message from "../Pages/Student/Message";
import CognitoAi from "../Pages/Student/CognitoAi";
import Support from "../Pages/Student/Support";
import Settings from "../Pages/Student/Settings";
import MyCourses from "../Pages/Student/MyCourses";
import CourseDetails from "../pagecomponents/CourseDetails";
// import LoginPage from "../Pages/LoginPage";
const AppNavigation = () => {
  return (
    <>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/CognitoAi" element={<CognitoAi />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/MyCourses" element={<MyCourses />} />
        <Route path="/CoursesDetails" element={<CourseDetails/>}/>
      </Routes>
    </>
  );
};
export default AppNavigation;
