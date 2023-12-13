import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Input, Label } from 'reactstrap'

export default function Single_Input_Revision() {
    let [user, set_user] = useState("")
    let [all_user, set_all_user] = useState([])

    // get data from input
    const user_data = (ele_data)=>{
        // ele.target = information of input element
        // ele.target.value = input value
        set_user(ele_data?.target?.value)
    }

    // add task to array
    const user_task = ()=>{
        if(user.length > 0){
            // why use [...all_car, car] => to copy old data and add new data
            set_all_user([...all_user, user])
            // to empty input after click on add todo button
            set_user("")
            toast.success("User Name Add")
        }else{
            toast.error("Please Fill The Input")
        }
        
    }

    return (
        <>
            {/* <h1>{user}</h1> */}
            <div className='w-50 border dark rounded-3 p-4 mt-4'>
                <h1 className='text-center'>Add User Name</h1>
                <hr />
                <Label>Name</Label>
                <Input value={user} placeholder='Add your Task' onChange={(e)=>user_data(e)} />
                <Button color="danger" className='mt-3 w-100' onClick={()=>user_task()}>Add</Button>
            </div>
            
            {
                all_user.length > 0 ?
                <div className='w-50 border border-1 dark rounded-3 p-4 mt-5'>
                    <h3 className='text-center'>Your User List</h3>
                    <hr />
                    {
                        all_user.map((e, i)=>{
                            return <h6 key={i} className='border-bottom border-1 dark pb-2'>{i + 1}. {e}</h6>
                        })
                    }
                </div> :
                (
                    <h1>Please Add Some User Data</h1>
                )
            }
        </>
    )
}
