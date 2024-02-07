/* eslint-disable react/prop-types */
// import React from 'react'
import { useLocation } from "react-router-dom";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const pathCollection = [
    "/100105-experience-product/DowellEmailExtractor",
    "/100105-experience-product/DowellWebsiteCrawler",
  ];

  const isActive = pathCollection.includes(pathname); // === `/100105-experience-product/DowellEmailExtractor`;
  // const navigateTo = useNavigate();

  return (
    <>
      {!isActive ? (
        <>
          <SideNav />
          <div className="p-4 md:ml-64">
            <div className="p-4">{children}</div>
          </div>
        </>
      ) : (
        children
      )}
    </>
  );
};

export default Layout;
