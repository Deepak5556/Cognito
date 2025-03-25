import React from "react";
import { icons } from "../assets/icons";
import "../style/Sidebar.css";
import SideBarButton from "./SideBarButton";
const Sidebar = () => {
  const {
    RiBook2Fill,
    RxDashboard,
    IoBookOutline,
    BiMessageRoundedDetail,
    FaBrain,
    BiSolidBookReader,
    IoSettings,
    BiSupport,
  } = icons;
  return (
    <>
      <div className="sidebar">
        <div className="side-content">
          <div className="logo">
            <RiBook2Fill className="primary mt-2 m-2" size="40px" />
            <div className="logo-title fs-1 koulen-regular primary">
              Cognito
            </div>
          </div>
          <div className="side-all-con">
            <div className="general">
              <div className="category">General</div>
              <SideBarButton
                icon={RxDashboard}
                link="/Dashboard"
                Title="Dashboard"
              />
              <SideBarButton
                icon={IoBookOutline}
                link="/Courses"
                Title="Courses"
              />
              <SideBarButton
                icon={BiMessageRoundedDetail}
                link="/Message"
                Title="Messages"
              />
            </div>
            <div className="course">
              <div className="category">Courses</div>
              <SideBarButton
                icon={BiSolidBookReader}
                link="/MyCourses"
                Title="MyCourses"
              />
            </div>
            <div className="other">
              <div className="category">Others</div>
              <SideBarButton
                icon={FaBrain}
                link="/CognitoAi"
                Title="Cogni AI"
              />
              <SideBarButton icon={BiSupport} link="/Support" Title="Support" />
              <SideBarButton
                icon={IoSettings}
                link="/Settings"
                Title="Settings"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
