import "../APP.css"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensilSpoon, faSearch, faMoon } from '@fortawesome/free-solid-svg-icons'
import { DropdownItem, DropdownMenu, DropdownToggle, Dropdown, Button } from 'reactstrap'
import img from "../assets/banner1.png"

export default function Header({ direction, ...args }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const toggle2= () => setDropdownOpen2((prevState) => !prevState);

    return (
        <>
            <div className="flex">
                {/* header */}
                <div className="d-flex gap-5 col-12 align-items-center p-3 container">
                    <div className='col-2' style={{letterSpacing:"2px", fontWeight:"600", fontSize:"34px"}}>
                        Sa <FontAwesomeIcon icon={faUtensilSpoon} style={{color:"#f7783c", rotate:"-45deg", position:"absolute", left:"105px", top:"24px"}}/>ads
                    </div>
                    <div className='col-8 d-flex justify-content-end'>
                        <ul className='list-inline fw-bold mb-0'>
                            <li className='list-inline-item pe-3 m-0'>
                                <a href="" className='text-decoration-none' style={{color:"#f7783c"}}>Home</a>
                            </li>
                            <li className='list-inline-item pe-3 m-0'>
                                <a href="" className='text-decoration-none text-black'>About</a>
                            </li>
                            <li className='list-inline-item pe-3 m-0'>
                                <a href="" className='text-decoration-none text-black'>Menu</a>
                            </li>
                            <li className='list-inline-item pe-3 m-0'>
                                <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} >
                                    <DropdownToggle caret style={{backgroundColor: "transparent", padding: "0px", border: "none", color: "black", marginTop: "-4px", fontWeight: "bold"}}>Pages</DropdownToggle>
                                    <DropdownMenu {...args}>
                                        <DropdownItem>404 Page</DropdownItem>
                                        <DropdownItem>Email Template</DropdownItem>
                                        <DropdownItem>Short Codes</DropdownItem>
                                        <DropdownItem>Landing Page</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                            <li className='list-inline-item pe-3 m-0'>
                                <Dropdown isOpen={dropdownOpen2} toggle={toggle2} direction={direction}>
                                    <DropdownToggle caret style={{background: "transparent", border: "none", color: "black", fontWeight: "bold", marginTop: "-4px", padding: "0px"}}>Blogs</DropdownToggle>
                                    <DropdownMenu {...args}>
                                        <DropdownItem>Blog Posts</DropdownItem>
                                        <DropdownItem>Blog Single</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                            <li className='list-inline-item m-0'>
                                <a href="" className='text-decoration-none text-black'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-1'>
                        <ul className='list-inline mb-0 fs-5'>
                            <li className='list-inline-item pe-3 m-0'>
                                <a href="" className='text-decoration-none text-black'>
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>
                            </li>
                            <li className='list-inline-item m-0'>
                                <a href="" className='text-decoration-none text-black'>
                                    <FontAwesomeIcon className="icon" icon={faMoon}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* home_page */}
                <div className="container"> 
                    <div className="row">
                        <div className="col-6">
                            <h1 style={{fontSize: "72px", fontWeight: "700", lineHeight: "82px", padding: "60px 0px 0px 0px"}}>Fresh Healthy</h1>
                            <p style={{fontSize: "75px", lineHeight: "82px"}}>Delicious Salads</p>
                            <p style={{fontSize: "18px", lineHeight: "30px", paddingTop: "30px"}}>
                                Healthy foods to eat everyday, Tasty and healthy vegetables salad with fresh tomatoes, coriander leaves and more.
                            </p>
                            <Button className="btn" style={{margin: "30px 0px"}}>Order Now</Button>
                        </div>
                        <div className="col-6 ps-5 pe-0 text-center" style={{paddingTop: "30px"}}>
                            <img src={img} alt="" className="photo"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}