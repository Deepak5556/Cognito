import React from "react";
import { Route, Routes } from "react-router-dom";
import TeacherDashBoard from "../Pages/Teacher/TeacherDashBoard";

const TeacherNavigation = () => {
  return (
    <>
      <Routes>
        <Route path="/TeacherDashBoard" element={<TeacherDashBoard />} />
      </Routes>
    </>
  );
};

export default TeacherNavigation;
