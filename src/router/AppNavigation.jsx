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

const AppNavigation = () => {
  return (
    <Routes>
      <Route path="/Home/Dashboard" element={<Dashboard />} /> {/* Relative path */}
      <Route path="/Hame/Courses" element={<Courses />} />
      <Route path="/Hame/Message" element={<Message />} />
      <Route path="/Hame/CognitoAi" element={<CognitoAi />} />
      <Route path="/Hame/Support" element={<Support />} />
      <Route path="/Hame/Settings" element={<Settings />} />
      <Route path="/Hame/MyCourses" element={<MyCourses />} />
      <Route path="/Hame/CoursesDetails" element={<CourseDetails />} />
    </Routes>
  );
};

export default AppNavigation;
