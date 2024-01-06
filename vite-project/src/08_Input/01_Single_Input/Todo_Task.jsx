import './Style.css'
import { FileEdit, Slash, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Input, Label } from 'reactstrap'

export default function Todo_Task() {
    let [todo, setTodo] = useState("")
    let [all_todo, set_all_todo] = useState([])
    let [index, setIndex] = useState(null)
    let [selectData, setSelectData] = useState([])

    // get data from input
    const todoData = (ele) => {
        setTodo(ele.target.value)
    }

    // add task to array
    const addTodo = () => {
        if (todo.length > 0) {
            const match = all_todo.some((e) => {
                return e === todo
            })
            if (match) {
                toast.error("Same Data Already Exists")
            } else {
                set_all_todo([...all_todo, todo])
                setTodo("")
                localStorage.setItem("todo", JSON.stringify([...all_todo, todo]))
                toast.success("Todo Added Successfully")
            }
        } else {
            toast.error("Please Fill The Input")
        }
    }

    // use effect
    useEffect(() => {
        let json_data = localStorage.getItem("todo")
        let normal_data = JSON.parse(json_data)
        set_all_todo(normal_data || [])
    }, [])

    // delete with filter
    const deleteHandler = ((index) => {
        if (selectData.includes(index)) {
        let filter_data = all_todo.filter((e, i) => i != index)
        set_all_todo(filter_data)
        localStorage.setItem("todo", JSON.stringify(filter_data))
        alert("are you sore your data delete")
        toast.info("Data Remove Successfully")
        }else{
            toast.error("please Selet Check Box")
        }
    })

    // input check data
    const selectHandler = (index) => {
        let match = selectData.includes(index);

        if (match) {
            setSelectData(selectData.filter((e) => e !== index));
        } else {
            setSelectData([...selectData, index]);
        }
    };

    // update is success
    const updateData = () => {
        if (index || index === 0 && todo.length > 0) {
            all_todo.splice(index, 1, todo)
            setTodo([...all_todo])
            setTodo("")
            setIndex(null)
            localStorage.setItem("todo", JSON.stringify([...all_todo]))
            toast.success("Data Update Successfully")
        } else {
            toast("Please Updata New Data")
        }
    }

    // set user for update
    const updateHandler = (data, index) => {
        setTodo(data);
        setIndex(index)
    }

    return (
        <>
            <div className='w-25 border dark m-auto mt-3 p-3'>
                <h1 className='text-center'>Todo_Task</h1>
                <hr />
                <Label>Todo :-</Label>
                <Input value={todo} placeholder='Enter Your Todo' onChange={(e) => todoData(e)} />
                <div className='text-center'>
                    {
                        (index || index === 0) ?
                            (
                                <Button color='danger' className='mt-3' onClick={() => updateData()}>Update</Button>
                            ) :
                            (
                                <Button color='danger' className='mt-3' onClick={(e) => addTodo(e)}>Submit</Button>
                            )
                    }
                </div>
            </div>

            {
                all_todo.length > 0 ?
                    <div className='w-50 border border-1 dark rounded-3 m-auto p-4 mt-5'>
                        <h3 className='text-center'>Your Todo List</h3>
                        <hr />
                        {
                            all_todo.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <div className='border-bottom border-1 dark pb-2 d-flex w-100 justify-content-between'>
                                            <h6>{i + 1}. {e}</h6>
                                            <div>
                                                <FileEdit color='red' style={{ cursor: "pointer" }} onClick={() => updateHandler(e, i)} />
                                                <Slash color='red' style={{ rotate: "-20deg" }} />
                                                <Input type='checkbox' onChange={() => selectHandler(i)} checked={selectData.includes(i)} style={{ padding: "10px", border: "2px solid red", borderRadius: "50%" }} />
                                                <Trash color='red' onClick={() => deleteHandler(i)} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div> :
                    (
                        <h1 className='text-center mt-3'>Please Add Some Todo</h1>
                    )
            }
        </>
    )
}
