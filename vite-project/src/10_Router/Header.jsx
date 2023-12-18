import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"

export default function Header() {
    return (
        <>
            <div>
                <ul className='d-flex justify-content-center align-items-center gap-3 list-inline text-uppercase'>
                    <li>
                        <NavLink to={"/"} className='text-decoration-none'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"Contact"} className='text-decoration-none'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
