import React, { useState } from 'react'
import { Label, Input, Button } from 'reactstrap'
import { CheckCircleFill, Trash3 } from 'react-bootstrap-icons'

export default function Todo_List() {
    let [task, setTask] = useState("")
    let [pendingTask, setPendingTask] = useState([])
    let [doneTask, setDoneTask] = useState([])
    
    // get data from input
    const getData = (ele) => {
        let inputValue = ele?.target?.value
        setTask(inputValue)
    }

    // add task to array
    const addTask = () => {
        let allData = [...pendingTask, task]; // combine old + new data
        setPendingTask(allData);
        setTask(""); // to empty input value after add task
    }

    // delete with filter
    const deleteHandler = (index) => {
        let ans = confirm("Are you sure ?");
        if (ans) {
        let arr = doneTask.filter((e, i) => i !== index);
        setDoneTask(arr);
        }
    }

    // single done task
    const doneTaskHandler = (index) => {
        setDoneTask([...doneTask, pendingTask[index]]);
        let newData = pendingTask?.filter((e, i) => i !== index);
        setPendingTask(newData);
    };

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

            <div className="d-flex w-100 p-4 justify-content-between ">
                {/* pending task */}
                <div style={{ minWidth: "45%" }} className="border dark rounded-2 p-2 mt-3">
                    {
                        pendingTask.length > 0 ?
                        <div>
                            <h1 className="text-center">Pending Task</h1>
                            <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
                            <ul className='list-inline'>
                                {pendingTask.map((element, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="d-flex justify-content-between ">
                                                <li className='list-inline-item'>{i + 1}. {element}</li>
                                                <div className="d-flex gap-2">
                                                    <CheckCircleFill role="button" color="green" onClick={() => doneTaskHandler(i)} />
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })}
                            </ul>
                        </div> :
                        (
                            <h1>Please Add Some Pending Data</h1>
                        )
                    }
                </div>

                {/* done task */}
                <div style={{ minWidth: "45%" }} className="border dark rounded-2 p-2 mt-3">
                    {
                        doneTask.length > 0 ?
                        <div>
                            <h1 className="text-center">Done Task</h1>
                            <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
                            <ul className='list-inline'>
                                {doneTask.map((element, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="d-flex justify-content-between ">
                                                <li className='list-inline-item'>{i + 1}. {element}</li>
                                                <div className="d-flex gap-2">
                                                    <Trash3 onClick={() => deleteHandler(i)} color="red" />
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })}
                            </ul>
                        </div> :
                        (
                            <h1>Please Add Some Done Data</h1>
                        )
                    }
                </div>
            </div>
        </>
    )
}
