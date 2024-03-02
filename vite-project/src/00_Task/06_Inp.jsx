import React, { useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

const initializeData = {
    email: "",
    password: "",
}

export default function Inp() {
    let [user, setUser] = useState(initializeData)

    return (
        <div className='d-flex gap-5 border dark p-2 m-2'>
            <div style={{ flex: "1" }}>
                <Form>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input value={user?.email} type='email' placeholder='Enter Name' onChange={(e) => setUser({ ...user, email: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input value={user?.password} type='password' placeholder='Enter Password' onChange={(e) => setUser({ ...user, password: e?.target?.value })} />
                    </FormGroup>
                </Form>
            </div>
            <div style={{ flex: "1" }}>
                <Form>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input value={user?.email} type='email' placeholder='Enter Name' onChange={(e) => setUser({ ...user, email: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input value={user?.password} type='password' placeholder='Enter Password' onChange={(e) => setUser({ ...user, password: e?.target?.value })} />
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}