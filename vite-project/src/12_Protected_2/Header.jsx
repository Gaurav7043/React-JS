import React from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import "./index.css"

export default function Header() {
    const loginHandler = ()=>{
        localStorage.setItem("login",
        // for admin
        JSON.stringify({login: true, userType: "admin"}))

        // for normal user
        // JSON.stringify({login: true, userType: "user"}))
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
                        <NavLink to={"/Contact"} className='text-decoration-none'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/profile"} className='text-decoration-none'>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin"} className='text-decoration-none'>Admin</NavLink>
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
