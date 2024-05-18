import React from 'react';
import * as Icons from "react-icons/vsc";
import {NavLink, useLocation , matchPath} from "react-router-dom";
import {useDispatch} from "react-redux";



function SidebarLink({link , iconName}) {

    const Icon = Icons[iconName];
    const location = useLocation();
    const dispatch = useDispatch();

    const matchRoute = (route) => {
        // console.log("LOCATION PATHNAME ---- >",location.pathname)
        // console.log("PATH:ROUTE PATHNAME ---- >",{path:route})
        return matchPath( {path:route} , location.pathname );
    }


    return (
    <NavLink 
    to={link.path}
    className={`relative px-8 py-2 text-sm font-medium ${matchRoute(link.path) ? 
    "bg-yellow-800 text-yellow-50" : "bg-opacity-0 text-richblack-300"} 
    transition-all duration-200`}
    >

        <span className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-50
        ${matchRoute(link.path) ? "opacity-100" : "opacity-0"}`}>

        </span>

        <div className='flex items-center gap-x-2'>
            <Icon className="text-lg"/>
            <span>{link.name}</span>
        </div>

    </NavLink>
  )
}

export default SidebarLink