import React from 'react'
import '../style/NavBar.css'
import { icons } from '../assets/icons'
const NavBar = () => {
    const { FaBell,IoPerson
    } = icons;
    return (
        <>
            <div className="navbar shadow-lg p-3  bg-body px-4">
                <div className="logo">
                    Welcome Back Deepak!
                </div>
                <div className="list">
                    <ul>
                        <li> <FaBell/> </li>
                        <li>  <IoPerson size='20px' /> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default NavBar