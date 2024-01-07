import React, { useEffect, useState } from 'react'
import { Label, Input, Button } from 'reactstrap'
import { CheckCircleFill, Trash3 } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'

export default function Todo_List() {
    let [task, setTask] = useState("")
    let [pendingTask, setPendingTask] = useState([])
    let [doneTask, setDoneTask] = useState([])

    // get data from input
    const getData = (ele) => {
        let inputValue = ele?.target?.value
        setTask(inputValue)
    }

    // add task to arry
    const addTask = () => {
        let allData = [...pendingTask, task] // combine old + new data
        if (task.length > 0) {
            const match = pendingTask.some((e) => {
                return e === task
            })
            if (match) {
                toast.error("Same Data Already Exists")
            } else {
                setPendingTask(allData)
                setTask("")
                localStorage.setItem("task", JSON.stringify([...pendingTask, task]))
                toast.success("Data Added Successfully")
            }
        } else {
            toast.error("Please Fill The Input")
        }
    }

    // use effect
    useEffect(() => {
        let json_data = localStorage.getItem("task")
        let normal_data = JSON.parse(json_data)
        setPendingTask(normal_data || [])
    }, [])

    // delete with filter
    const deleteHandler = (index) => {
        let ans = confirm("Are you Sure ?")
        if (ans) {
            let deleteData = doneTask.filter((e, i) => i !== index)
            setDoneTask(deleteData)
            localStorage.setItem("task", JSON.stringify(deleteData))
            toast.info("Data Remove Successfully")
        } else {
            toast.warn("You Data Not Remove")
        }
    }

    // single done task
    const doneTaskHandler = (index)=>{
        setDoneTask([...doneTask, pendingTask[index]])
        let newData = pendingTask?.filter((e, i)=> i !== index)
        setPendingTask(newData)
    }

    return (
        <>
            <div className='w-25 border dark rounded-3 p-3 mt-3 m-auto'>
                <h1 className='text-center'>Add List</h1>
                <hr />
                <Label>Add Todo :-</Label>
                <Input value={task} placeholder='Enter Your Data' onChange={(e) => getData(e)} />
                <div className="text-center">
                    <Button color='danger' className='mt-3' onClick={() => addTask()}>Add Task</Button>
                </div>
            </div>

            <div className="d-flex gap-4 p-4 justify-content-between align-items-center">
                {/* pending task */}
                <div className='w-50 m-auto border dark rounded-3 p-3 mt-5'>
                    <h1 className='text-center'>Pending Task</h1>
                    <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
                    <ul className='list-inline'>
                        {
                            pendingTask.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <li className='list-inline-item'>{i + 1}. {e}</li>
                                            <div className='d-flex gap-2'>
                                                <CheckCircleFill role='button' color='green' onClick={()=>doneTaskHandler(i)} />
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* done task */}
                <div className='w-50 m-auto border dark rounded-3 p-3 mt-5'>
                    <h1 className='text-center'>Done Task</h1>
                    <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
                    <ul className='list-inline'>
                        {
                            doneTask.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <li className='list-inline-item'>{i + 1}. {e}</li>
                                            <Trash3 color='red' onClick={() => deleteHandler(i)} />
                                        </div>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
