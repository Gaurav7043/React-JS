import { Trash } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function Multiple_Input() {
    let [user, set_user] = useState({
        email : "",
        city : "",
        password : "",
    })
    let [all_user, set_all_user] = useState([])

    // add task to array
    const user_data = (e)=>{
        if(user.email.length > 0 && user.password.length > 0){
            e.preventDefault();
            // Check for duplicate input data
            if(!all_user.some((existinguser) => isEqual (existinguser, user))){
                set_all_user([...all_user, user])
                set_user({email: "", city: "", password: ""})
                toast.success("User Added Successfully")
            }else{
                toast.dark("User with the Same Data Already Exits")
            }
        }else{
            toast.error("Please Fill Data")
        }
    }

    // delete with filter
    const data_delete = ((index)=>{
        // delete with splice
        // let del = ([...all_user])
        // del.splice(index, 1)
        // set_all_user(del)
        // toast.info("Data Remove Successfully")
        
        all_user.splice(index, 1)
        set_user([...all_user])
        toast.info("Data Remove Successfully")
        
        // delete with filter
        // let filter_data = all_user.filter((e, i)=> i !== index)
        // set_all_user(filter_data)
        // toast.info("Data Remove Successfully")
    })

    // Function to check if two users are equal
    const isEqual = (user_1, user_2) =>{
        return user_1.email === user_2.email && user_1.password === user_2.password;
    }

    return (
        <>
            {/* <h1>email: {user.email}</h1>
            <h1>city: {user.city}</h1>
            <h1>password: {user.password}</h1> */}
            <Form className="border m-auto mt-3 dark p-3 rounded-3 w-25" autoComplete="off">
                {/* 1st box */}
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input value={user.email} id="exampleEmail" name="email" placeholder="Enter your email" type="email" onChange={(e)=>set_user({...user, email: e?.target?.value})}/>
                </FormGroup>
                {/* 2nd box */}
                <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input value={user.city} id="exampleCity" name="city" placeholder="Enter your city" type="text" onChange={(e)=>set_user({...user, city: e?.target?.value})}/>
                </FormGroup>
                {/* 3rd box */}
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input value={user.password} id="examplePassword" name="password" placeholder="Enter your password" type="password" onChange={(e)=>set_user({...user, password: e?.target?.value})}/>
                </FormGroup>
                {/* 4th box */}
                <Button color="danger" className="w-100" onClick={(e)=>user_data(e)}>Submit</Button>
            </Form>

            {
                all_user.length > 0 ?
                <Table striped>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            all_user.map((e, i)=>{
                                return <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{e.email}</td>
                                    <td>{e.city}</td>
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
                                    <td><Trash color="#e61919" style={{cursor: "pointer"}} onClick={()=>data_delete(i)} /></td>
                                </tr> 
                            })
                        }
                    </tbody>
                </Table> :
                (
                    <h1 className="text-center">Please Add Some User Data</h1>
                )
            }
            
        </>
    );
}
