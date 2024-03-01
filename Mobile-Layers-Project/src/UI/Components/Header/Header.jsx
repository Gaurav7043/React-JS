import React from 'react'
import logo from '../../../../public/logo.webp'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { BoxSeam, Cart } from 'react-bootstrap-icons'
import { Moon } from 'lucide-react'

export default function Header() {
    return (
        <>
            <div className="header" style={{borderBottom: "1px solid #00000014"}}>
                <div className="container pt-3 pb-3">
                    <div className="head_box d-flex align-items-center">
                        <div className="logo" style={{ flex: "0.5" }}>
                            <NavLink to={"/"}>
                                <img src={logo} alt="" className='img-fluid image_logo' />
                            </NavLink>
                        </div>
                        <div className="nav w-100" style={{ flex: "3" }}>
                            <ul className='list-inline d-flex align-items-center justify-content-end w-100 m-0 nav'>
                                <li>
                                    <NavLink to={"/"} />
                                </li>
                                <li>
                                    <NavLink to={"/mobileskin"} className="text-decoration-none navlink">Mobile Skin</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/laptopskin"} className="text-decoration-none navlink">Laptop Skin</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/skincollection"} className="text-decoration-none navlink">Skin Collection</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/notfound"} className="text-decoration-none navlink">Find Your Device</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/apply"} className="text-decoration-none navlink">How to Apply</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/login"} className="text-decoration-none navlink">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/trackorder"} className="navlink1 fs-5">
                                        <BoxSeam className='box' />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/search"} className="navlink1 fs-5">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/search"} className="navlink1 fs-5">
                                        <Cart />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/d&lmode"} className="navlink1 fs-5">
                                        <Moon />
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
