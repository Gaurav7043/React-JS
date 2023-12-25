import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavbarToggler,
  Collapse
} from "reactstrap";
import Register_Modal from "./Modal/Register_Modal";

function Header_RS(args) {
    const [registerModal, setRegisterModal] = useState(false)
    const registerToggle = () => setRegisterModal(!registerModal)

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <Register_Modal modal={registerModal} toggle={registerToggle} />
            <Navbar {...args}>
                <NavbarBrand href="/">Reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="m-auto w-100 d-flex justify-content-between align-items-center" navbar>
                        <NavItem>
                            <NavLink to="/" className='text-decoration-none'>Home</NavLink>
                        </NavItem>
                        <NavItem className="me-3">
                            <Button color="danger" onClick={registerToggle}>Login</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default Header_RS;
