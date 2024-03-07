import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Form, Button, Input, FormGroup } from 'reactstrap'
import '../Login/Login.css'
import "./SignUp.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { login } from '../../../../Redux/Fetures/Auth/AuthSlice'

const initializeData = {
    name: "",
    email: "",
    number: "",
    password: "",
    conPassword: "",
    // gender: "",
    age: "",
}

const initializeAddress = {
    add: "",
    city: "",
    state: "",
    pincode: "",
}

export default function SignUp(props) {
    const [user, setUser] = useState(initializeData)
    const [address, setAddress] = useState(initializeAddress)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e?.preventDefault()
        if (user.password !== user.conPassword) return toast.error("Password and confirm password does not match")
        axios({
            method: "post",
            url: "http://localhost:9999/user/signup",
            data: { ...user, address: [address] }
        }).then((res) => {
            dispatch(login(res?.data))
            toast.success("User login success")
            console.log("====res_data===>", res.data)
            navigate("/")
        }).catch((err) => {
            toast.error("Something is Wrong")
        })
    }

    const quantityInputRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0)
        const ignoreScroll = (e) => {
            e.preventDefault();
            quantityInputRef.current && quantityInputRef.current.addEventListener("wheel", ignoreScroll);
        };
    }, [quantityInputRef]);
    return (
        <>
            <div className='w-50 text-center m-auto'>
                <h1 className='heading'>Create Account</h1>
                <Form autoComplete='off' style={{ paddingBottom: "60px" }} onSubmit={(e) => submitHandler(e)}>
                    <FormGroup>
                        <Input value={user?.name} type='text' placeholder='Name' className='txt' onChange={(e) => setUser({ ...user, name: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={user?.email} placeholder="Email" type="email" className='txt' onChange={(e) => setUser({ ...user, email: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={user?.age} type='text' className='txt' placeholder='Enter Age' onChange={(e) => setUser({ ...user, age: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={user?.number} type='text' className='txt' placeholder='Mobile Number' onChange={(e) => setUser({ ...user, number: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={address?.add} type='text' className='txt' placeholder='Enter Area' onChange={(e) => setAddress({ ...address, add: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={address?.city} type='text' className='txt' placeholder='Enter City' onChange={(e) => setAddress({ ...address, city: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={address?.state} type='text' className='txt' placeholder='Enter State' onChange={(e) => setAddress({ ...address, state: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={address?.pincode} type='text' className='txt' placeholder='Enter Pincode' onChange={(e) => setAddress({ ...address, pincode: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input ref={quantityInputRef} value={user?.password} placeholder="Password" type="password" className='txt' onChange={(e) => setUser({ ...user, password: e?.target?.value })} {...props} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={user?.conPassword} placeholder="Confirm Password" type="password" className='txt' onChange={(e) => setUser({ ...user, conPassword: e?.target?.value })} />
                    </FormGroup>
                    <Button className='signin'>CREATE</Button>
                    <div className='d-flex align-items-center pb-3'>
                        <Input className='m-0' type='checkbox' />
                        <span className='ps-2' style={{ fontSize: "14px" }}>
                            Sign up for our newsletter. Get 10% off on 1sh purchase by using Coupon code: <span className='fw-bold'>WELCOME10</span>
                        </span>
                    </div>
                    <p className='or'>Or login using</p>
                    <span style={{ opacity: ".62" }}>Already have Account ? </span>
                    <NavLink to={"/login"} className="text-decoration-none">
                        <span role='button' className='signup'>Login</span>
                    </NavLink>
                </Form>
            </div>
        </>
    )
}

/*
import React from 'react'
import { Form, Button, Input, FormGroup, Label } from 'reactstrap'
import '../Login/Login.css'
import "./SignUp.css"

export default function SignUp() {

    return (
        <>
            <div className='w-50 text-center m-auto'>
                <h1 className='heading'>Create Account</h1>
                <Form autoComplete='off' style={{ paddingBottom: "60px" }}>
                    <FormGroup>
                        <Input type='text' placeholder='Name' className='txt' />
                    </FormGroup>
                    <FormGroup>
                        <Input placeholder="Email" type="email" className='txt' />
                    </FormGroup>
                    <FormGroup>
                        <Input type='text' className='txt' placeholder='Date Of Birth'></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type='text' className='txt' placeholder='Mobile Number' />
                    </FormGroup>
                    <FormGroup>
                        <Input placeholder="Password" type="password" className='txt' />
                    </FormGroup>
                    <FormGroup>
                        <Input placeholder="Confirm Password" type="password" className='txt' />
                    </FormGroup>
                    <FormGroup>
                        <Input type="checkbox" className='shadow-none border-black me-2' />
                        <Label>Show Password</Label>
                    </FormGroup>
                    <Button className='signin'>CREATE</Button>
                    <div className='d-flex align-items-center pb-3'>
                        <Input className='m-0' type='checkbox' />
                        <span className='ps-2' style={{ fontSize: "14px" }}>
                            Sign up for our newsletter. Get 10% off on 1sh purchase by using Coupon code: <span className='fw-bold'>WELCOME10</span>
                        </span>
                    </div>
                    <p className='or'>Or login using</p>
                    <span style={{ opacity: ".62" }}>Already have Account ? </span>
                    <NavLink to={"/login"} className="text-decoration-none">
                        <span role='button' className='signup'>Login</span>
                    </NavLink>
                </Form>
            </div>
        </>
    )
}
*/
