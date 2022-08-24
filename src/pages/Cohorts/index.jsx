import React from "react";
import {Link, Outlet} from "react-router-dom"

function Cohorts (){



    return (
        <>
        <Link to="bhatia">Bhatia</Link> <br/>
        <Link to="rincon">Rincon</Link> <br/>
        <Outlet/>
        </>
    )
}

export default Cohorts