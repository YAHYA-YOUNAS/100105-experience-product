/* eslint-disable react/prop-types */
// import React from 'react'
import SideNav from './SideNav'

const Layout = ({children}) => {
  return (
    <div>
        <SideNav />
        <div className="p-4 sm:ml-64">
          <div className="p-4">
            {children}
          </div> 
        </div>
    </div>
  )
}

export default Layout