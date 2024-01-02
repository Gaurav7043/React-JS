import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import Select from 'react-select';

const UserTypeOptions = [
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Admin' },
    { value: 'employee', label: 'Employee' },
  ];

export default function Register_Modal({ modal, toggle }) {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                            />
                        </FormGroup>
                        <Label>Gender</Label>
                        <FormGroup tag="fieldset" className='d-flex gap-3'>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                <Label check>Male</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                <Label check>Female</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                <Label check>Kids</Label>
                            </FormGroup>
                        </FormGroup>
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
                        <Label>Option</Label>
                        <Select value={user} options={UserTypeOptions} />
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="password placeholder"
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