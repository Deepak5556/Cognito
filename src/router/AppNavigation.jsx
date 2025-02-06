import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Sidebar from '../components/Sidebar'
import Dashboard from '../Pages/Dashboard'
import Courses from '../Pages/Courses'
const AppNavigation = () => {
    return (
        <>
        {/* <Home/> */}
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/Dashboard" element={<Dashboard/>} />
                <Route path="/Courses" element={<Courses/>} />
                
            </Routes>
        </>
    )
}
export default AppNavigation