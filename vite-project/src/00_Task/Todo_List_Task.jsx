import React, { useEffect, useState } from 'react'
import { Label, Input, Button } from 'reactstrap'
import { CheckCircleFill, Plus, Trash3 } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'

export default function Todo_List_Task() {
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
        if (task.length > 0) {
            const matchPending = pendingTask.some((e) => e === task);
            const matchDone = doneTask.some((e) => e === task);

            if (matchPending || matchDone) {
                toast.error("Same Data Already Exists");
            } else {
                setPendingTask([...pendingTask, task]);
                setTask("");
                localStorage.setItem("task", JSON.stringify({ pendingTask: [...pendingTask, task], doneTask }));
                toast.success("Data Added Successfully");
            }
        } else {
            toast.error("Please Fill The Input");
        }
    }

    // delete with filter
    const deleteHandler = (index) => {
        let ans = window.confirm("Are you Sure ?");
        if (ans) {
            let deleteData = doneTask.filter((e, i) => i !== index);
            setDoneTask(deleteData);
            localStorage.setItem("task", JSON.stringify({ pendingTask, doneTask: deleteData }));
            toast.info("Data Remove Successfully");
        } else {
            toast.warn("Your Data Not Remove");
        }
    }

    // single done task
    const doneTaskHandler = (index) => {
        let done = window.confirm("Your Data Go Done Task");
        if (done) {
            setDoneTask([...doneTask, pendingTask[index]]);
            let newData = pendingTask?.filter((e, i) => i !== index);
            setPendingTask(newData);
            localStorage.setItem("task", JSON.stringify({ pendingTask: newData, doneTask: [...doneTask, pendingTask[index]] }));
            toast.success("Your Data Added Done Task Successfully");
        } else {
            toast.warn("Your Data Not Go to done Task");
        }
    };

    // single pending task
    const pendingTaskHandler = (index) => {
        let pending = window.confirm("Your Data Go Pending Task");
        if (pending) {
            setPendingTask([...pendingTask, doneTask[index]]);
            let newData = doneTask?.filter((e, i) => i !== index);
            setDoneTask(newData);
            localStorage.setItem("task", JSON.stringify({ pendingTask: [...pendingTask, doneTask[index]], doneTask: newData }));
            toast.success("Your Data Added Pending Task Successfully");
        } else {
            toast.warn("Your Data Not Go to Pending Task");
        }
    };

    // use effect for local storage data save
    useEffect(() => {
        let json_data = localStorage.getItem("task");
        let parsed_data = JSON.parse(json_data);
        if (parsed_data) {
            setPendingTask(parsed_data.pendingTask || []);
            setDoneTask(parsed_data.doneTask || []);
        }
    }, []);

    return (
        <>
            <div className='w-25 border dark rounded-3 p-3 mt-3 m-auto'>
                <h1 className='text-center'>Add List</h1>
                <hr />
                <Label>Add Todo :-</Label>
                <div className='d-flex align-items-center'>
                    <Input value={task} placeholder='Enter Your Data' style={{borderTopRightRadius: "0px", borderBottomRightRadius: "0px"}} onChange={(e) => getData(e)} />
                    <Button color='danger' onClick={() => addTask()} style={{borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"}}><Plus /></Button>
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
                                                    <CheckCircleFill role="button" color="red" onClick={() => pendingTaskHandler(i)} />
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
