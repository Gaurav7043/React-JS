import React from 'react'
import "./index.css"
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Header() {
    const loginHandler = ()=>{
        localStorage.setItem("login",
        // for superadmin
        // JSON.stringify({login: true, userType: "superadmin"}))

        // for admin
        // JSON.stringify({login: true, userType: "admin"}))

        // for employee
        // JSON.stringify({login: true, userType: "emp"}))
        
        // for user
        // JSON.stringify({login: true, userType: "user"}))
        
        // for profile
        JSON.stringify({login: true, userType: "profile"}))
    }

    const logoutHandler = ()=>{
        localStorage.removeItem("login")
    }

    return (
        <>
            <div>
                <ul className='d-flex justify-content-center align-items-center m-2 gap-3 list-inline text-uppercase'>
                    <li>
                        <NavLink to={"/"} className='text-decoration-none'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/profile"} className='text-decoration-none'>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user"} className='text-decoration-none'>user</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/emp"} className='text-decoration-none'>Employee</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin"} className='text-decoration-none'>Admin</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/supadmin"} className='text-decoration-none'>SuperAdmin</NavLink>
                    </li>
                    <li className='gap-3 d-flex justify-content-end w-100'>
                        <Button color='danger' onClick={loginHandler}>Login</Button>
                        <Button color='danger' onClick={logoutHandler}>Logout</Button>
                    </li>
                </ul>
            </div>
        </>
    )
}
