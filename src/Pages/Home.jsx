import React from 'react'
import Sidebar from '../components/Sidebar'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import AppNavigation from '../router/AppNavigation'
import NavBar from '../components/NavBar'
const Home = () => {
    return (
        <>
            <div className="row">
                <div className="sidebar col-2 ">
                    <Sidebar />
                </div>
                <div className="col-9">
                  <div className="container">
                    {/* <Dashboard/> */}
                    <NavBar/>
                    <AppNavigation/>
                  </div>
                </div>
            </div>
        </>
    )
}
export default Home