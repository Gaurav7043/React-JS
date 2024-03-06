import React, { useLayoutEffect } from 'react'
import { Form, Button, Input, FormGroup } from 'reactstrap'
import './Login.css'
import { NavLink } from 'react-router-dom'

export default function Login() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    return (
        <>
            <div className='w-50 text-center m-auto ps-5 pe-5'>
                <h1 className='heading'>Customer Login</h1>
                <Form autoComplete='off' style={{ paddingBottom: "110px" }} onSubmit={(e) => submitHandler(e)}>
                    <FormGroup>
                        <Input id="email" name="email" placeholder="Email" type="email" className='txt' />
                    </FormGroup>
                    <FormGroup>
                        <Input id="password" name="password" placeholder="Password" type="password" className='txt' />
                    </FormGroup>
                    <p>
                        <NavLink to={"/forgotpassword"} className="text-decoration-none">
                            <span role='button' className='forgot'>Forgot your Password?</span>
                        </NavLink>
                    </p>
                    <Button className='signin'>SIGN IN</Button>
                    <p className='or'>Or login using</p>
                    <span style={{ opacity: ".62" }}>New Customer ? </span>
                    <NavLink to={"/signup"} className="text-decoration-none">
                        <span role='button' className='signup'>Sign Up</span>
                    </NavLink>
                </Form>
            </div>
        </>
    )
}
