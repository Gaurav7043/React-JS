import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Bike_Service() {
    return (
        <>
            <h1>Bike Service</h1>
            <NavLink to={"/service/bike/sports"} className='text-black ms-2 me-2 fw-bold text-decoration-none p-2 rounded-1' style={{backgroundColor: "dodgerblue"}}>Sports</NavLink>
            <NavLink to={"/service/bike/normal"} className='text-black fw-bold text-decoration-none p-2 rounded-1' style={{backgroundColor: "dodgerblue"}}>Normal</NavLink>

            <Outlet/>
        </>
    )
}
