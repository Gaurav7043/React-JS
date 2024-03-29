import React, { useEffect, useState } from 'react'
import { Label, Input, Button } from 'reactstrap'
import { CheckCircleFill, Trash3 } from 'react-bootstrap-icons'

export default function Search_Data() {
    let [task, setTask] = useState("")
    let [pendingTask, setPendingTask] = useState([])
    let [searchPending, setSearchPending] = useState("")
    let [doneTask, setDoneTask] = useState([])
    let [searchDone, setSearchDone] = useState("")
    let [selectPending, setSelectPending] = useState([])
    let [selectDone, setSelectDone] = useState([])
    
    // get data from input
    const getData = (ele) => {
        let inputValue = ele?.target?.value
        setTask(inputValue)
    }

    // use effect local storage
    useEffect(()=>{
        setPendingTask(JSON.parse(localStorage.getItem("pendingData") || "[]"))
        setDoneTask(JSON.parse(localStorage.getItem("doneData") || "[]"))
    }, [])

    // pending search data
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("pendingData") || "[]")
        let fliterData = data.filter((e)=> e.toLowerCase().includes(searchPending.toLowerCase()))
        setPendingTask(fliterData)
        // console.log("============>")
    }, [searchPending])

    // done search data
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("doneData") || "[]")
        let fliterData = data.filter((e)=> e.toLowerCase().includes(searchDone.toLowerCase()))
        setDoneTask(fliterData)
        // console.log("============>")
    }, [searchDone])

    // add task to array
    const addTask = () => {
        if(task.length > 0){
            let allData = [...pendingTask, task]; // combine old + new data
            localStorage.setItem("pendingData", JSON.stringify(allData))
            setPendingTask(allData);
            setTask(""); // to empty input value after add task
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

    // single pending task
    const pendingTaskHandler = (index) => {
        setPendingTask([...pendingTask, doneTask[index]]);
        let newData = doneTask?.filter((e, i) => i !== index);
        setDoneTask(newData);
        localStorage.setItem("task", JSON.stringify({ pendingTask: [...pendingTask, doneTask[index]], doneTask: newData }))
    }

    // select handler pending and done task
    const selectHandler = (index, type)=>{
        if(type === "pending"){
            if(selectPending?.includes(index)){
                setSelectPending(selectPending?.filter((e)=> e !== index))
            }else{
                setSelectPending([...selectPending, index])
            }
        }else if(type === "done"){
            if(selectDone?.includes(index)){
                setSelectDone(selectDone?.filter((e)=> e !== index))
            }else{
                setSelectDone([...selectDone, index])
            }
        }
    }

    // select all in checkbox
    const selectAllHandler = (type, check)=>{
        if(type === "pending"){
            if(check){
                setSelectPending(pendingTask.map((e, i)=> i))
            }else{
                setSelectPending([])
            }
        }else if(type === "done"){
            if(check){
                setSelectDone(doneTask.map((e, i)=> i))
            }else{
                setSelectDone([])
            }
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

            <div className="d-flex w-100 p-4 justify-content-between ">
                {/* pending task */}
                <div style={{ minWidth: "45%" }} className="border dark rounded-2 p-2 mt-3">
                    {
                        pendingTask.length > 0 ?
                        <div>
                            <div className='w-100 d-flex justify-content-end p-3'>
                                <Input value={searchPending} className='w-50' placeholder='Search Your Task Here' onChange={(e)=>setSearchPending(e.target.value)} />
                            </div>
                            <h1 className="text-center">Pending Task</h1>
                            <div className='d-flex align-items-center justify-content-end gap-2'>
                                <Input type='checkbox' className='m-0 rounded-5 p-2' checked={pendingTask.length === selectPending.length} onClick={(e)=>selectAllHandler("pending", e.target.checked)}/>
                                <Label className='m-0 fw-bold'>Select All</Label>
                            </div>
                            <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
                            <ul className='list-inline'>
                                {
                                    pendingTask.map((element, i) => {
                                        return (
                                            <div key={i}>
                                                <div className="d-flex justify-content-between align-items-center ">
                                                    <li className='list-inline-item'>{i + 1}. {element}</li>
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <Input role='button' checked={selectPending?.includes(i)} type='checkbox' className='m-0' style={{boxShadow: "none"}} onClick={()=>selectHandler(i, "pending")} />
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
                            <div className='w-100 d-flex justify-content-end p-3'>
                                <Input value={searchDone} className='w-50' placeholder='Search Your Task Here' onChange={(e)=>setSearchDone(e.target.value)} />
                            </div>
                            <h1 className="text-center">Done Task</h1>
                            <div className='d-flex align-items-center justify-content-end gap-2'>
                                <Input type='checkbox' className='m-0 rounded-5 p-2' checked={doneTask.length === selectDone.length} onClick={(e)=>selectAllHandler("done", e.target.checked)} />
                                <Label className='m-0 fw-bold'>Select All</Label>
                            </div>
                            <hr style={{ padding: "5px", backgroundColor: "darkgray" }} />
                            <ul className='list-inline'>
                                {
                                    doneTask.map((element, i) => {
                                        return (
                                            <div key={i}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <li className='list-inline-item'>{i + 1}. {element}</li>
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <Input role='button' checked={selectDone?.includes(i)} type='checkbox' className='m-0' style={{boxShadow: "none"}} onChange={()=>selectHandler(i, "done")} />
                                                        <CheckCircleFill role="button" color="green" onClick={() => pendingTaskHandler(i)} />
                                                        <Trash3 role='button' onClick={() => deleteHandler(i)} color="red" />
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
