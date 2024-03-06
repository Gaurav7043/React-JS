import React, { useLayoutEffect, useState } from 'react'
import { Form, Button, Input, FormGroup } from 'reactstrap'
import '../Login/Login.css'
import "./SignUp.css"

const initializeData = {
    name: "",
    email: "",
    num: "",
    password: "",
    age: "",
    address: [
        {
            add: "",
            city: "",
            state: "",
            pincode: "",
        }
    ],
}

export default function SignUp() {
    const [register, setRegister] = useState(initializeData)

    const submitHandler = (e) => {
        e?.preventDefault()
        setRegister(initializeData)
        console.log("===alldata=====>", register)
    }
    
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })

    return (
        <>
            <div className='w-50 text-center m-auto'>
                <h1 className='heading'>Create Account</h1>
                <Form autoComplete='off' style={{ paddingBottom: "60px" }} onSubmit={(e) => submitHandler(e)}>
                    <FormGroup>
                        <Input value={register?.name} type='text' placeholder='Name' className='txt' onChange={(e) => setRegister({ ...register, name: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={register?.email} placeholder="Email" type="email" className='txt' onChange={(e) => setRegister({ ...register, email: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={register?.age} type='text' className='txt' placeholder='Enter Age' onChange={(e) => setRegister({ ...register, age: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={register?.num} type='text' className='txt' placeholder='Mobile Number' onChange={(e) => setRegister({ ...register, num: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={register?.address[0]?.add} type='text' className='txt' placeholder='Enter Area' onChange={(e) => setRegister({ ...register, address: [{ ...register?.address[0], add: e?.target?.value }] })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={register?.address[0]?.city} type='text' className='txt' placeholder='Enter City' onChange={(e) => setRegister({ ...register, address: [{ ...register?.address[0], city: e?.target?.value }] })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={register?.address[0]?.state} type='text' className='txt' placeholder='Enter State' onChange={(e) => setRegister({ ...register, address: [{ ...register?.address[0], state: e?.target?.value }] })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={register?.address[0]?.pincode} type='text' className='txt' placeholder='Enter Pincode' onChange={(e) => setRegister({ ...register, address: [{ ...register?.address[0], pincode: e?.target?.value }] })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={register?.password} placeholder="Password" type="password" className='txt' onChange={(e) => setRegister({ ...register, password: e?.target?.value })} />
                    </FormGroup>
                    <Button className='signin'>CREATE</Button>
                    <div className='d-flex align-items-center pb-3'>
                        <Input className='m-0' type='checkbox' />
                        <span className='ps-2' style={{ fontSize: "14px" }}>
                            Sign up for our newsletter. Get 10% off on 1sh purchase by using Coupon code: <span className='fw-bold'>WELCOME10</span>
                        </span>
                    </div>
                    <p className='or'>Or login using</p>
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
                </Form>
            </div>
        </>
    )
}
*/
