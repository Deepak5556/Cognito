import React from 'react'
import '../style/SideBarButton.css'
const SideBarButton = (props) => {
    return (
        <>
            <div className="SideBarButtonicon">
                <props.icon size="20px"/>
                <div className="name" >
                    {props.Title}
                </div>
            </div>
        </>
    )
}
export default SideBarButton