import { FileEdit, Slash, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Input, Label, Button, Table } from 'reactstrap'

export default function Local_Storage_Task() {
    let [todo, set_todo] = useState("")
    let [all_todo, set_all_todo] = useState([])
    let [index, set_index] = useState(null)

    // add task to array
    const add_task = ()=>{
        // Check for duplicate input data
        let match = all_todo.some((e)=>{
            return e === todo
        })
        
        if(todo.length > 0){
            if(match){
                toast.warning("User with the Same Data Already Exits")
            }else{
                set_all_todo([...all_todo, todo])
                localStorage.setItem("Todo List", JSON.stringify([...all_todo, todo]))
                set_todo("")
                toast.success("Data Added Successfully")
            }
        }else{
            toast.error("Please Fill Data")
        }
    }

    // useEffect
    useEffect(()=>{
        let json_data = localStorage.getItem("Todo List")
        let normal_data = JSON.parse(json_data)
        // console.log(normal_data)
        set_all_todo(normal_data || [])
    }, [])

    // clear all data
    const clear_all = ()=>{
        set_all_todo([])
        localStorage.clear()
        toast.dark("All Data are Clear")
    }

    // delete with filter
    const data_delete = (index)=>{
        // all_todo.splice(index, 1)
        // set_all_todo([...all_todo])
        // localStorage.setItem("Todo List", JSON.stringify([...all_todo]))
        // toast.info("Data Remove Successfully")

        const json_data = all_todo.filter((e, i) => i !== index)
        set_all_todo(json_data)
        localStorage.setItem("Todo List", JSON.stringify(json_data))
        toast.info("Data Remove Successfully")
    }

    // update is success
    const update_data = ()=>{
        // Check for duplicate input data
        let match = all_todo.some((e)=>{
            return e === todo
        })

        if(index || index === 0 && todo.length > 0){
            if(match){
                toast.warning("User with the Same Data Already Exits")
            }else{
                all_todo.splice(index, 1, todo)
                set_todo([...all_todo])
                localStorage.setItem("Todo List", JSON.stringify([...all_todo]))
                set_todo("")
                set_index(null)
                toast.success("Data Update Successfully")
            }
        }else{
            toast("Please Updata New Data")
        }
    }

    // set user for update
    const data_update = (data, index)=>{
        set_todo(data);
        set_index(index)
    }

    return (
        <>
            <div className='border dark w-25 m-auto mt-3 p-3'>
                <h1 className='text-center'>Todo List</h1>
                <hr />
                <Label>Todo Name :-</Label>
                <Input value={todo} placeholder='Enter Your Task' onChange={(e)=>set_todo(e.target.value)} />
                <div className='d-flex justify-content-center gap-3'>
                    {
                        (index || index === 0) ?
                        (
                            <Button color='danger' className='mt-4' onClick={()=>update_data()}>Update</Button>
                        ):
                        (
                            <Button color='danger' className='mt-4' onClick={(e)=>add_task(e)}>Submit</Button>
                        )
                    }
                    <Button color='danger' className='mt-4' onClick={()=>clear_all()}>Clear</Button>
                </div>
            </div>

            {
                all_todo.length > 0 ?
                <Table striped className='w-50 m-auto mt-4'>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            all_todo.map((e, i)=>{
                                return <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{e}</td>
                                    <td>
                                        <Trash color="#e61919" style={{cursor: "pointer"}} onClick={()=>data_delete(i)} />
                                        <Slash color='#e61919' style={{rotate: "-20deg"}} />
                                        <FileEdit color='#e61919' style={{cursor: "pointer"}} onClick={()=>data_update(e, i)} />
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>:
                (
                    <h1 className="text-center mt-3">Please Add Some User Data</h1>
                )
            }
        </>
    )
}
