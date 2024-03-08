import React, { useLayoutEffect, useState } from 'react'
import { Form, Button, Input, FormGroup } from 'reactstrap'
import './Login.css'
import '../SignUp/SignUp.css'
import { NavLink} from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import axios from 'axios'

const initializeData = {
    email: "",
    password: "",
}

export default function Login() {
    let [user, setUser] = useState(initializeData)
    let [showPassword, setShowPassword] = useState(false)
    
    // password hide and show
    const passwordShowHideHandler = ()=>{
        setShowPassword(!showPassword)
    }
    
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    const submitHandler = (e)=>{
        e?.preventDefault()
        axios({
            method: "post",
            url: "http://localhost:9999/user/login",
            data: { email, password }
        }).then((res)=>{
            console.log("======res_data======>", res.data)
        }).catch((err)=>{
            console.log("=======err======>", err)
        })
    }
    
    return (
        <>
            <div className='w-50 text-center m-auto ps-5 pe-5'>
                <h1 className='heading'>Customer Login</h1>
                <Form autoComplete='off' style={{ paddingBottom: "110px" }} onSubmit={(e) => submitHandler(e)}>
                    <FormGroup>
                        <Input value={user?.email} id="email" name="email" placeholder="Email" type="email" className='txt' onChange={(e)=>setUser({...user, email: e?.target?.value})} />
                    </FormGroup>
                    <FormGroup className='position-relative'>
                        <Input value={user?.password} id="password" name="password" placeholder="Password" type={showPassword ? "text" : "password"} className='txt' onChange={(e)=>setUser({...user, password: e?.target?.value})} />
                        {
                            showPassword ?
                            <div className='eye_hover'>
                                <EyeOff role='button' color='black' onClick={passwordShowHideHandler} />
                            </div> :
                            <div className='eye_hover'>
                                <Eye role='button' onClick={passwordShowHideHandler} />
                            </div>
                        }
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
