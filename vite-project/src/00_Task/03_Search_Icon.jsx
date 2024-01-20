import React, { useEffect, useState } from 'react'
import { Label, Input, Button } from 'reactstrap'
import { CheckCircleFill, Trash3 } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'
import { Search } from 'lucide-react'

export default function Search_Icon() {
    let [task, setTask] = useState("")
    let [pendingTask, setPendingTask] = useState([])
    let [searchPending, setSearchPending] = useState("")
    let [doneTask, setDoneTask] = useState([])
    let [searchDone, setSearchDone] = useState("")

    // get data from input
    const getData = (ele) => {
        let inputValue = ele?.target?.value
        setTask(inputValue)
    }

    // use effect local storage
    useEffect(() => {
        setPendingTask(JSON.parse(localStorage.getItem("pendingData") || "[]"))
        setDoneTask(JSON.parse(localStorage.getItem("doneData") || "[]"))
    }, [])

    // pending search data
    const Search_Data= (()=>{
        let data = JSON.parse(localStorage.getItem("pendingData") || "[]")
        let fliterData = data.filter((e) => e.toLowerCase().includes(searchPending.toLowerCase()))
        setPendingTask(fliterData)
    })

    // done search data
    const searchData = ()=>{
        let data = JSON.parse(localStorage.getItem("doneData") || "[]")
        let fliterData = data.filter((e) => e.toLowerCase().includes(searchDone.toLowerCase()))
        setDoneTask(fliterData)   
    }

    // add task to array
    const addTask = () => {
        if (task.length > 0) {
            let allData = [...pendingTask, task]; // combine old + new data
            localStorage.setItem("pendingData", JSON.stringify(allData))
            setPendingTask(allData);
            setTask(""); // to empty input value after add task
        } else {
            toast.error("pls")
        }
    }

    // delete with filter
    const deleteHandler = (index) => {
        let ans = confirm("Are you sure ?");
        if (ans) {
            let arr = doneTask.filter((e, i) => i !== index);
            setDoneTask(arr);
            localStorage.setItem("doneData", JSON.stringify(arr))
        }
    }

    // single done task
    const doneTaskHandler = (index) => {
        setDoneTask([...doneTask, pendingTask[index]]);
        let newData = pendingTask?.filter((e, i) => i !== index);
        setPendingTask(newData);
        localStorage.setItem("doneData", JSON.stringify([...doneTask, pendingTask[index]]))
        localStorage.setItem("pendingData", JSON.stringify(newData))
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
                            <div className='w-100 d-flex justify-content-end p-3 align-items-center'>
                                <Input value={searchPending} className='w-50 shadow-none' placeholder='Search Your Task Here' onChange={(e) => setSearchPending(e.target.value)} />
                                <Search role='button' onClick={()=>Search_Data()}/>
                            </div>
                            <h1 className="text-center">Pending Task</h1>
                            <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
                            <ul className='list-inline'>
                                {
                                    pendingTask.map((element, i) => {
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
                                    })
                                }
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
                            <div className='w-100 d-flex justify-content-end p-3 align-items-center'>
                                <Input value={searchDone} className='w-50 shadow-none' placeholder='Search Your Task Here' onChange={(e) => setSearchDone(e.target.value)} />
                                <Search role='button' onClick={()=>searchData()}/>
                            </div>
                            <h1 className="text-center">Done Task</h1>
                            <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
                            <ul className='list-inline'>
                                {
                                    doneTask.map((element, i) => {
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
                                    })
                                }
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
