import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error404() {
    return (
        <>
            <div className=''>
                <h1 className='mb-3'>Error 404</h1>
                <NavLink to={"/"} className='text-black ms-5 fw-bold text-decoration-none p-2' style={{backgroundColor: "dodgerblue"}}>Home</NavLink>
            </div>
        </>
    )
}
