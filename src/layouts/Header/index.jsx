import React from "react";
import {NavLink, Outlet} from "react-router-dom"

function Header (){

    return (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="cohorts">Cohorts</NavLink>
          <NavLink to="about">About</NavLink>
          <br/><br/>
          <Outlet/>
        </>
    )
}

export default Header
