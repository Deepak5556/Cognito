import React from 'react'
import { icons } from '../assets/icons'
import "../style/Slidebar.css";
import SideBarButton from './SideBarButton';

const Sidebar = () => {
    const { RiBook2Fill, RxDashboard, IoBookOutline, BiMessageRoundedDetail, FaBrain, BiSolidBookReader, IoSettings,
        BiSupport
    } = icons;
    return (
        <>
            <div className="sidebar">
                <div className="side-content">
                    <div className="logo">
                        <RiBook2Fill className='primary' size='40px' />
                        <div className="logo-title fs-1 koulen-regular primary">Cognito</div>
                    </div>
                    <div className="side-all-con">
                        <div className="general">
                            <div className="category">
                                General
                            </div>
                            <SideBarButton icon={RxDashboard} Title="Dashboard" />
                            <SideBarButton icon={IoBookOutline} Title="Courses" />
                            <SideBarButton icon={BiMessageRoundedDetail} Title="Messages" />
                            <SideBarButton icon={FaBrain} Title="Cogni AI" />
                        </div>
                        <div className="course">
                            <div className="category">
                                Courses
                            </div>
                            <SideBarButton icon={BiSolidBookReader} Title="MyCourses" />
                        </div>
                        <div className="other">
                            <div className="category">
                                Others
                            </div>
                            <SideBarButton icon={BiSupport} Title="Support" />
                            <SideBarButton icon={IoSettings} Title="Settings" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar