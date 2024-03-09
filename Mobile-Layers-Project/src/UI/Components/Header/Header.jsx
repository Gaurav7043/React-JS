import React, { useLayoutEffect } from 'react'
import logo from '../../../../public/logo.webp'
import "./Header.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { BoxSeam, Cart } from 'react-bootstrap-icons'
import { CircleUserRound, Moon } from 'lucide-react'
import { useSelector } from 'react-redux'
import { NavItem } from 'reactstrap'

export default function Header() {
    const data = useSelector((state) => state.authSlice)
    const navigate = useNavigate()
    // console.log("====data=====>", data?.user?.userType)

    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
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
                            {
                                data?.user?.userType !== "admin" ?
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
                                </ul>:
                                <>
                                    <ul className='list-inline d-flex align-items-center justify-content-center w-75 m-0 nav'>
                                        <NavItem>
                                            <NavLink to={"/dashboard"} className="text-decoration-none navlink">Dashboard</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to={"/admin-product"} className="text-decoration-none navlink">Product</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to={"/order"} className="text-decoration-none navlink">Order</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to={"/user"} className="text-decoration-none navlink">User</NavLink>
                                        </NavItem>
                                    </ul>
                                    {
                                        data?.token ?
                                        <CircleUserRound role='button' onClick={()=>navigate("/profile")} />:
                                        <NavItem>
                                            <NavLink to={"/login"} className="text-decoration-none navlink">Login</NavLink>
                                        </NavItem>
                                    }
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
