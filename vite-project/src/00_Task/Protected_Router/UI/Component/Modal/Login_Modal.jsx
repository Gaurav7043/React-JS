import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { toast } from 'react-toastify';

const initializeData = {
    email: "",
    Password: ""
}

export default function Login_Modal({ modal, toggle }) {
    let [user, setUser] = useState(initializeData)

    // to get form data
    const getData = (e) => {
        e?.preventDefault();
        
        console.log("======Login=========")
        console.log("Email :-", user?.email)
        console.log("Password :-", user?.Password)

        // Check if the email already exists
        const jsonData = localStorage?.getItem("dataArray") || "[]";
        const normalData = JSON?.parse(jsonData);

        // if (normalData.some(existingUser => existingUser.email === user.email)) {
        //     toast.warn("Email already exists. Please use a different email.");
        //     return;
        // }

        // if (user.userType === 'admin' && normalData.some(existingUser => existingUser.userType === 'admin')) {
        //     toast.warn("Admin user already exists. Only one admin user is allowed.");
        //     return;
        // }

        localStorage.setItem("dataArray", JSON.stringify([...normalData, user]));
        setUser(initializeData);

        if (user.email === "" || user.Password === "") {
            toast.warn("Please Fill Data");
        } else {
            toast.success("Data Add Successfully");
            toggle();
            setUser(initializeData);
        }
    }

    const handleToggle = () => {
        toggle(); // Close the modal

        // Reset the user state to initial values
        setUser(initializeData);
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={handleToggle}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={getData} autoComplete='off'>
                        {/* 1st box */}
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                value={user?.email}
                                id="exampleEmail"
                                name="email"
                                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                                placeholder="Enter Email"
                                type="email"
                            />
                        </FormGroup>

                        {/* 2th box */}
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                value={user?.Password}
                                id="examplePassword"
                                name="password"
                                onChange={(e) => setUser({ ...user, Password: e?.target?.value })}
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
