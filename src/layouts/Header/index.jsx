import React from "react";
import {NavLink, Outlet} from "react-router-dom"

function Header (){

  const activeClassName = "underline";

  function activeStyle({isActive}){
    return (isActive ? {textDecoration: "underline"} : undefined)
  }

    return (
        <>
          <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : undefined}>Home</NavLink>
          <NavLink to="cohorts" style={activeStyle}>Cohorts</NavLink>
          <NavLink to="about" style={activeStyle}>About</NavLink>
          <br/><br/>
          <Outlet/>
        </>
    )
}

export default Header