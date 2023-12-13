import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { Activity } from 'lucide-react'

// props ki value change nhi hogi
export default function Props_Value_Change(props) {
    let change_name_1 = ()=>{
        props.name = "user"
    }
    
    // let [index, set_index] = useState(props.name)
    // let change_name_2 = ()=>{
    //     set_index("user");
    // }
    
    let [index, set_index] = useState(props.name)
    let [index_1, set_index_1] = useState(false)
    let change_name = ()=>{
        set_index(index_1 ? props.name : "User");
        set_index_1(!index_1)
    }

    return (
        <>
            {/* <Activity />
            <Activity color="#610505" /> */}
            <h1>Hello, {index}</h1>
            <Button color='danger' onClick={change_name}>Change User</Button>
            <hr style={{width:"100vh"}}/>
            <h1>Hello, {props.name}</h1>
            <Button color='danger' onClick={change_name_1}>Change User</Button>
        </>
    )
}
