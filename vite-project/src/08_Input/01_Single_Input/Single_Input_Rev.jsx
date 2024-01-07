import React, { useEffect, useState } from 'react'
import { Label, Input, Button } from 'reactstrap'
import { Trash3 } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'

export default function Single_Input_Rev() {
    let [task, setTask] = useState("")
    let [taskArray, setTaskArray] = useState([])

    // get data from input
    const getData = (ele) => {
        let inputValue = ele?.target?.value
        setTask(inputValue)
    }

    // add task to arry
    const addTask = () => {
        let allData = [...taskArray, task] // combine old + new data
        if (task.length > 0) {
            const match = taskArray.some((e) => {
                return e === task
            })
            if (match) {
                toast.error("Same Data Already Exists")
            } else {
                setTaskArray(allData)
                setTask("")
                localStorage.setItem("task", JSON.stringify([...taskArray, task]))
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
        setTaskArray(normal_data || [])
    }, [])

    // delete with filter
    const deletHandler = (index) => {
        let ans = confirm("Are you Sure ?")
        if (ans) {
            let deletData = taskArray.filter((e, i) => i !== index)
            setTaskArray(deletData)
            localStorage.setItem("task", JSON.stringify(deletData))
            toast.info("Data Remove Successfully")
        } else {
            toast.warn("You Data Not Remove")
        }
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

            {
                taskArray.length > 0 ?
                    <div className='w-50 m-auto border dark rounded-3 p-3 mt-5'>
                        <h1 className='text-center'>Task List</h1>
                        <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
                        <ul className='list-inline'>
                            {
                                taskArray.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <li className='list-inline-item'>{i + 1}. {e}</li>
                                                <Trash3 color='red' onClick={() => deletHandler(i)} />
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>:
                    (
                        <h1 className='text-center mt-5'>Please Add Some Todo List</h1>
                    )
            }
        </>
    )
}
