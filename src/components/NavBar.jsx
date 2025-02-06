import React from 'react'
import '../style/NavBar.css'
import { icons } from '../assets/icons'
const NavBar = () => {
    const { FaBell
    } = icons;
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    Cognito
                </div>
                <div className="list">
                    <ul>
                        <FaBell/>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
