import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import Select from 'react-select';
import { toast } from 'react-toastify';

const userTypeOptions = [
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Admin' },
    { value: 'employee', label: 'Employee' },
];

const initializeData = {
    email: "",
    gender: "male",
    hobbies: [],
    userType: "user",
    Password: ""
}

export default function Register_Modal({ modal, toggle }) {
    let [user, setUser] = useState(initializeData)
    
    const checkHandler = (item) => {
        const matchItem = user?.hobbies?.includes(item)
        if (matchItem) {
            let filter = user?.hobbies?.filter((e) => e !== item)
            setUser({ ...user, hobbies: filter })
        } else {
            setUser({ ...user, hobbies: [...user?.hobbies, item] })
        }
    }

    // to get from data
    const getData = (e) => {
        e?.preventDefault();
        let jsonData = localStorage?.getItem("dataArray") || "[]"
        let normalData = JSON?.parse(jsonData)
        localStorage.setItem("dataArray", JSON.stringify([...normalData, user]))
        setUser(initializeData)
        if (user.email === "" || user.userType === "" || user.hobbies.length === 0 || user.Password === "") {
            toast.warn("Please Fill Data")
        } else {
            toast.success("Data Add SuccessFully")
            toggle()
            setUser(initializeData)
        }
    }

    const handleToggle = () => {
        toggle(); // Close the modal

        // Reset the user state to initial values
        setUser(initializeData);

        // Clear data from local storage
        // localStorage.removeItem("dataArray");
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={handleToggle}>Sign Up</ModalHeader>
                <ModalBody>
                    <Form onSubmit={getData}>
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

                        {/* 2nd box */}
                        <Label>Gender</Label>
                        <FormGroup tag="fieldset" className='d-flex gap-3'>
                            <FormGroup check>
                                <Input
                                    value={user?.gender}
                                    checked={user?.gender === "male"}
                                    name="radio1"
                                    type="radio"
                                    onChange={() => setUser({ ...user, gender: "male" })}
                                />
                                <Label check>Male</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    value={user?.gender}
                                    checked={user?.gender === "female"}
                                    name="radio1"
                                    type="radio"
                                    onChange={() => setUser({ ...user, gender: "female" })}
                                />
                                <Label check>Female</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    value={user?.gender}
                                    checked={user?.gender === "kids"}
                                    name="radio1"
                                    type="radio"
                                    onChange={() => setUser({ ...user, gender: "kids" })}
                                />
                                <Label check>Kids</Label>
                            </FormGroup>
                        </FormGroup>

                        {/* 3rd box */}
                        <Label>Hobbies</Label>
                        <FormGroup>
                            <FormGroup check inline>
                                <Input value={user.hobbies} checked={user?.hobbies?.includes("traveling")} onClick={() => checkHandler("traveling")} type="checkbox" />
                                <Label check>Traveling</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input value={user?.hobbies} checked={user?.hobbies?.includes("reading")} onClick={() => checkHandler("reading")} type="checkbox" />
                                <Label check>Reading</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input value={user?.hobbies} checked={user?.hobbies?.includes("sport")} onClick={() => checkHandler("sport")} type="checkbox" />
                                <Label check>Sport</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input value={user?.hobbies} checked={user?.hobbies?.includes("music")} onClick={() => checkHandler("music")} type="checkbox" />
                                <Label check>Music</Label>
                            </FormGroup>
                        </FormGroup>

                        {/* 4th box */}
                        <FormGroup>
                            <Label>User Type</Label>
                            <Select value={userTypeOptions?.find((e) => e.value === user?.userType)} onChange={(e) => setUser({ ...user, userType: e?.value })} options={userTypeOptions} />
                        </FormGroup>

                        {/* 5th box */}
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