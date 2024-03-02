import React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'


export default function Inp1({ value, setValue }) {

    return (
        <>
            <Form>
                <FormGroup>
                    <Label>Email</Label>
                    <Input value={value?.email} type='email' placeholder='Enter Name' onChange={(e) => setValue({ ...value, email: e?.target?.value })} />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input value={value?.password} type='password' placeholder='Enter Password' onChange={(e) => setValue({ ...value, password: e?.target?.value })} />
                </FormGroup>
            </Form>
        </>
    )
}
