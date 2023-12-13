import { FileEdit, Slash, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function Multiple_Input_Update() {
    let [user, set_user] = useState({
        email : "",
        password : ""
    })
    let [all_user, set_all_user] = useState([])
    let [index, set_index] = useState(null)
    
    // add task to array
    const user_task = ((e)=>{
        e.preventDefault()
        if(user.email.length > 0 && user.password.length > 0){
            // Check for duplicate input data
            if(!all_user.some((existinguser) => Equal (existinguser, user))){
                set_all_user([...all_user, user])
                set_user({email: "", password: ""})
                toast.success("Data Added Successfully")
            }else{
                toast.dark("User with the Same Data Already Exits")
            }
        }else{
            toast.error("Please Fill Data")
        }
    })

    // delete with filter
    const data_delete = ((index)=>{
        let filter_data = all_user.filter((e, i)=> i != index)
        set_all_user(filter_data)
        toast.info("Data Remove Successfully")
    })

    // update is success
    const update_data = ()=>{
        if(index || index === 0 && user.email.length > 0 && user.password.length > 0){
            all_user.splice(index, 1, user)
            set_user([...all_user])
            set_user({
                email : "",
                password : ""
            })
            set_index(null)
            toast.success("Data Update Successfully")
        }else{
            toast("Please Updata New Data")
        }
    }

    // set user for update
    const data_update = (data, index)=>{
        set_user(data);
        set_index(index)
    }

    // Function to check if two users are equal
    const Equal = (user_1, user_2) =>{
        return user_1.email === user_2.email && user_1.password === user_2.password;
    }

    return (
        <>
            <div className='w-25 m-auto border dark rounded-3 p-3 mt-3 mb-3'>
                <Form autoComplete='off'>
                    {/* 1st box */}
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input id="exampleEmail" value={user?.email} name="email" placeholder="Enter Your Email" type="email" onChange={(e)=>set_user({...user, email: e?.target?.value})}/>
                    </FormGroup>
                    {/* 2nd box */}
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input id="examplePassword" value={user?.password} name="password" placeholder="Enter Your password" type="password" onChange={(e)=>set_user({...user, password: e?.target?.value})}/>
                    </FormGroup>
                    {/* 3rd box */}
                    {
                        (index || index === 0) ?
                        (
                            <Button color='danger' className='w-100' onClick={()=>update_data()}>Update</Button>
                        ):
                        (
                            <Button color='danger' className='w-100' onClick={(e)=>user_task(e)}>Submit</Button>
                        )
                    }
                </Form>
            </div>
            {
                all_user.length > 0 ?
                <Table striped>
                    <thead>
                        <tr className='text-center'>
                            <th>Sr.No</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            all_user.map((e, i)=>{
                                return <tr key={i} style={{textAlign:"center"}}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{e.email}</td>
                                    <td style={{color: e.password.length < 8 ? "red" : "green"}}>{e.password}</td>
                                    {/* <td>
                                        {
                                            e.password.length < 8 ?
                                            (
                                                <td style={{color: "red"}}>{e.password}</td>
                                            ):
                                            (
                                                <td style={{color: "green"}}>{e.password}</td>
                                            )
                                        }
                                    </td> */}
                                    <td>
                                        <Trash color="#e61919" style={{cursor: "pointer"}} onClick={()=>data_delete(i)} />
                                        <Slash color="#e01010" style={{rotate: "-20deg"}} />
                                        <FileEdit color="#e01010" style={{cursor: "pointer"}} onClick={()=>data_update(e, i)} />
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>:
                (
                    <h1 className="text-center">Please Add Some User Data</h1>
                )
            }
        </>
    )
}
