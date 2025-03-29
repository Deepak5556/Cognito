import React from 'react'
import '../../style/Dashboard.css'
import DashCard from '../../pagecomponents/DashCard'
import DashCourses from '../../pagecomponents/DashCourses'

const Dashboard = () => {
  console.log("Dashboard component rendered"); // Debugging log

  return (
    <>
      <DashCard/>
      <DashCourses/>
    </>
  )
}

export default Dashboard
