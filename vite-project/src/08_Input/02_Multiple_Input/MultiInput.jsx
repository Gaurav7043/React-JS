import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import { toast } from 'react-toastify'
import { FileEdit, Slash, Trash } from 'lucide-react'

const initialState = {
    email: "",
    password: "",
    select: "",
    gender: "",
    checkbox: []
}

const genderOption = ["male", "female"]

const selectOption = [
    { value: "Select", label: "Select" },
    { value: "Cricket", label: "Cricket" },
    { value: "Chess", label: "Chess" },
    { value: "Lodu", label: "Lodu" },
    { value: "Volly Ball", label: "Volly Ball" },
]

const checkBoxOption = ["10th", "12th", "BCA", "BBA"]

export default function MultiInput() {
    const [user, setUser] = useState(initialState)
    const [allUser, setAllUser] = useState([])
    const [updateValue, setUpdateValue] = useState(null)

    const submitHandler = (e) => {
        e?.preventDefault()
        if(user?.email?.length > 0 && user?.password?.length > 0){
            setAllUser([...allUser, user])
            setUser(initialState)
            localStorage.setItem("user", JSON.stringify([...allUser, user]))
        }else{
            toast?.error("fill this form")
        }
    }

    useEffect(()=>{
        let jsonData = localStorage.getItem("user")
        let normalData = JSON.parse(jsonData)
        setAllUser(normalData || [])
    }, [])

    const handleCheckboxChange = (option) => {
        if (user?.checkbox?.includes(option)) {
            setUser({ ...user, checkbox: user?.checkbox?.filter(item => item !== option) })
        } else {
            setUser({ ...user, checkbox: [...user?.checkbox, option] })
        }
    }

    const deleteHandler = (index)=>{
        let filterData = allUser?.filter((e, i)=> i !== index)
        setAllUser(filterData)
        localStorage.setItem("user", JSON.stringify(filterData))
    }

    const updateData = (data, index)=>{
        setUser(data)
        setUpdateValue(index)
    }

    const updateHandler = ()=>{
        if(updateValue || updateValue === 0){
            allUser?.splice(updateValue, 1, user)
            setAllUser([...allUser])
            setUser(initialState)
            setUpdateValue(null)
            localStorage.setItem("user", JSON.stringify(allUser))
        }else{
            toast.error("fill form")
        }
    }

    return (
        <div>
            <h3 className='text-center my-3'>Registration Form</h3>
            <Form className='w-50 border m-auto p-3 mt-3'>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        value={user?.email}
                        id="email"
                        name="email"
                        placeholder="Enter Your Email"
                        type="email"
                        onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input
                        value={user?.password}
                        id="Password"
                        name="password"
                        placeholder="Enter Your Password"
                        type="password"
                        onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Select">Select</Label>
                    <Input
                        value={user?.select}
                        id="Select"
                        name="select"
                        type="select"
                        onChange={(e) => setUser({ ...user, select: e?.target?.value })}
                    >
                        {
                            selectOption?.map((e, i) => {
                                return (
                                    <option key={i} value={e?.value}>{e?.label}</option>
                                )
                            })
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <legend>Radio Buttons</legend>
                    <FormGroup className='d-flex gap-3 align-items-center'>
                        {
                            genderOption?.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <Input
                                            value={user?.gender}
                                            name="radio1"
                                            type="radio"
                                            className='me-2'
                                            checked={user?.gender === e}
                                            onChange={() => setUser({ ...user, gender: e })}
                                        />
                                        <Label>{e}</Label>
                                    </div>
                                )
                            })
                        }
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <legend>Checkboxes</legend>
                    <FormGroup check className='d-flex gap-5 align-items-center'>
                        {
                            checkBoxOption?.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <Input
                                            value={user?.checkbox}
                                            type="checkbox"
                                            checked={user?.checkbox?.includes(e)}
                                            onChange={() => handleCheckboxChange(e)}
                                        />
                                        <Label check>{e}</Label>
                                    </div>
                                )
                            })
                        }
                    </FormGroup>
                </FormGroup>
                {
                    (updateValue || updateValue === 0) ?
                    <Button color='danger' className='w-100' onClick={() => updateHandler()}>Update</Button>:
                    <Button color='danger' className='w-100' onClick={() => submitHandler()}>Submit</Button>
                }
            </Form>

            {
                allUser?.length > 0 ?
                <Table striped>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Select</th>
                            <th>Gender</th>
                            <th>Check Box</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUser?.map((e, i)=>{
                                return(
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{e?.email}</td>
                                        <td>{e?.password}</td>
                                        <td>{e?.select}</td>
                                        <td>{e?.gender}</td>
                                        <td>{`${e?.checkbox}`}</td>
                                        <td>
                                            <FileEdit onClick={()=>updateData(e, i)} />
                                            <Slash />
                                            <Trash color='red' onClick={()=>deleteHandler(i)} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>:
                <h2></h2>
            }
        </div>
    )
}
