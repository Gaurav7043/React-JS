import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import Select from 'react-select';

const userTypeOptions = [
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Admin' },
    { value: 'employee', label: 'Employee' },
  ];

export default function Register_Modal({ modal, toggle }) {
    let [user, setUser] = useState({
        email : "",
        gender : "male",
        hobbies : [],
        userType : "",
        Password : ""
    })
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
                <ModalBody>
                    <Form>
                        {/* 1st box */}
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                onChange={(e)=>setUser({...user, email : e?.target?.value})}
                                placeholder="Enter Email"
                                type="email"
                            />
                        </FormGroup>

                        {/* 2nd box */}
                        <Label>Gender</Label>
                        <FormGroup tag="fieldset" className='d-flex gap-3'>
                            <FormGroup check>
                                <Input
                                    checked={user?.gender === "male"}
                                    name="radio1"
                                    type="radio"
                                    onChange={()=>setUser({...user, gender: "male"})}
                                />
                                <Label check>Male</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    checked={user?.gender === "female"}
                                    name="radio1"
                                    type="radio"
                                    onChange={()=>setUser({...user, gender: "female"})}
                                />
                                <Label check>Female</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    checked={user?.gender === "kids"}
                                    name="radio1"
                                    type="radio"
                                    onChange={()=>setUser({...user, gender: "kids"})}
                                />
                                <Label check>Kids</Label>
                            </FormGroup>
                        </FormGroup>

                        {/* 3rd box */}
                        <Label>Hobbies</Label>
                        <FormGroup>
                            <FormGroup check inline>
                                <Input type="checkbox" />
                                <Label check>Traveling</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input type="checkbox" />
                                <Label check>Reading</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input type="checkbox" />
                                <Label check>Sport</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input type="checkbox" />
                                <Label check>Music</Label>
                            </FormGroup>
                        </FormGroup>

                        {/* 4th box */}
                        <FormGroup>
                            <Label>User Type</Label>
                            <Select onChange={(e)=>setUser({...user, userType : e?.value})} options={userTypeOptions} />
                        </FormGroup>

                        {/* 5th box */}
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                onChange={(e)=>setUser({...user, Password : e?.target?.value})}
                                placeholder="Enter Password"
                                type="password"
                            />
                        </FormGroup>

                        <Button color='danger' className='w-100'>Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}