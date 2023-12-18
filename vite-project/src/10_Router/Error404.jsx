import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error404() {
    return (
        <>
            <div className=''>
                <h1>Error 404</h1>
                <NavLink to={"/"} className='fs-5 text-black ms-5'>Home</NavLink>
            </div>
        </>
    )
}
