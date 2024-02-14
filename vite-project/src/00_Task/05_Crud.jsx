import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import { toast } from 'react-toastify';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Table } from 'reactstrap';

const userTypeOptions = [
    { value: 'User', label: 'User' },
    { value: 'Admin', label: 'Admin' },
    { value: 'Employee', label: 'Employee' },
]
const userTypeOptions1 = [
    { value: 'All User', label: 'All User' },
    { value: 'User', label: 'User' },
    { value: 'Admin', label: 'Admin' },
    { value: 'Employee', label: 'Employee' },
]

const initializeData = {
    email: "",
    userType: "User",
    Password: ""
}

export default function Crud() {
    let [user, setUser] = useState(initializeData)
    let [allUser, setAllUser] = useState([])
    const [modal, setModal] = useState(false);
    const [selectedUserType, setSelectedUserType] = useState(null)
    const toggle = () => setModal(!modal);

    const handleToggle = () => {
        toggle()
        setUser(initializeData)
    }

    // use effect
    useEffect(() => {
        let jsonData = localStorage.getItem("user")
        let normalData = JSON.parse(jsonData)
        setAllUser(normalData || [])
    }, [])

    const getData = (e) => {
        e.preventDefault();
        if (user?.email === "" || user?.userType === "" || user?.Password === "") {
            toast.warn("Please Fill Data")
        } else {
            toast.success("Data Add Successfully")
            setAllUser([...allUser, user])
            toggle()
            setUser(initializeData)
            localStorage.setItem("user", JSON.stringify([...allUser, user]))
        }
    }

    const userTypeChangeHandler = (selectOption) => {
        if (selectOption?.value === 'All User') {
            setSelectedUserType(null)
        } else {
            setSelectedUserType(selectOption)
        }
    }

    const filterUsers = selectedUserType ? allUser?.filter((user) => user?.userType === selectedUserType?.value) : allUser;

    return (
        <>
            <div className='d-flex justify-content-evenly mt-3 align-items-center mb-5'>
                <div style={{ width: "280px" }}>
                    <Select value={selectedUserType} options={userTypeOptions1} onChange={userTypeChangeHandler} />
                </div>
                <div>
                    <Button color="danger" onClick={toggle}>Register</Button>
                    <Modal isOpen={modal} toggle={handleToggle} backdrop='static'>
                        <ModalHeader toggle={toggle}>Registration Form</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={(e) => getData(e)} autoComplete='off'>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input value={user?.email} id="email" placeholder="Enter Email" type="email" onChange={(e) => setUser({ ...user, email: e?.target.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>User Type</Label>
                                    <Select value={userTypeOptions?.find((e) => e?.value === user?.userType)} onChange={(e) => setUser({ ...user, userType: e?.value })} options={userTypeOptions} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input value={user?.Password} id="password" placeholder="Enter Password" type="password" onChange={(e) => setUser({ ...user, Password: e?.target?.value })} />
                                </FormGroup>
                                <Button color='danger' className='w-100'>Submit</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            </div>

            {
                filterUsers?.length > 0 ?
                <Table striped className='w-75 m-auto border dark'>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterUsers?.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{e?.email}</td>
                                        <td>{e?.userType}</td>
                                        <td>{e?.Password}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table> :
                (
                    <h1 className="text-center">Data Not Available</h1>
                )
            }
        </>
    );
}
