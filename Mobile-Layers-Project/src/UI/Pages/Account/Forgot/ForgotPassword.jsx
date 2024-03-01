import React from 'react'
import { Form, Button, Input, FormGroup } from 'reactstrap'

export default function ForgotPassword() {
    return (
        <>
            <div className='w-50 text-center m-auto ps-5 pe-5'>
                <h1 className='heading'>Customer Login</h1>
                <h6 className='pb-2' style={{opacity: ".9"}}>We will send you an email to reset your password.</h6>
                <Form autoComplete='off'>
                    <FormGroup>
                        <Input id="email" name="email" placeholder="Email" type="email" className='txt'/>
                    </FormGroup>
                    <Button className='signin'>SUBMIT</Button>
                    <Button className='w-100 text-black p-3' style={{background: "none", border: "2px solid black", marginBottom: "93px"}}>CANCEL</Button>
                </Form>
            </div>
        </>
    )
}
