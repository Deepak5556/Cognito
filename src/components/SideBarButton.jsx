import React from 'react'
import { Link } from 'react-router-dom'
import '../style/SideBarButton.css'
const SideBarButton = (props) => {
    return (
        <>
            <Link className="SideBarButtonicon" to={props.link}>
                <div className="icon">
                <props.icon size="20px" />
                </div>
                <div className="name" >
                    {props.Title}
                </div>
            </Link>
        </>
    )
}
export default SideBarButton