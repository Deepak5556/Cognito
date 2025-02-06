import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Sidebar from '../components/Sidebar'
import Dashboard from '../Pages/Dashboard'
import Courses from '../Pages/Courses'
import Message from '../Pages/Message'
import CognitoAi from "../Pages/CognitoAi";
import Support from '../Pages/Support'
import Settings from '../Pages/Settings'
import MyCourses from '../Pages/MyCourses'
const AppNavigation = () => {
    return (
        <>
        {/* <Home/> */}
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/Dashboard" element={<Dashboard/>} />
                <Route path="/Courses" element={<Courses/>} />
                <Route path="/Message" element={<Message/>} />
                <Route path="/CognitoAi" element={<CognitoAi/>} />
                <Route path="/Support" element={<Support/>} />
                <Route path="/Settings" element={<Settings/>} />
                <Route path="/MyCourses" element={<MyCourses/>} />
            </Routes>
        </>
    )
}
export default AppNavigation