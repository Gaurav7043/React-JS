import { Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button, Input, Label } from 'reactstrap'
import "./Todo.css"
import Pending from './Pending'
import Done from './Done'
import ".././checkBox.css"

export default function ToDoList() {
    let [todo, setTodo] = useState("")
    let [pending, setPending] = useState([])
    let [done, setDone] = useState([])

    useEffect(() => {
        let pendingData = JSON.parse(localStorage.getItem("pending") || "[]");
        setPending(pendingData);
        let doneData = JSON.parse(localStorage.getItem("done") || "[]");
        setDone(doneData);
      }, []);

    const handelKey = (e) => {
        if (e?.key === "Enter" && todo.length > 0) {
            dataHandler()
        }
    }

    const dataHandler = (e) => {
        if(todo.length > 0){
            e?.preventDefault()
            setPending([...pending, todo])
            localStorage.setItem("pending", JSON.stringify([...pending, todo]))
            setTodo("")
        }
    }

    return (
        <>
            <div className='body'>
                <div className='w-50 m-auto mt-3 p-3'>
                    <Label className='w-100 text-center p-2 fw-bold text-white fs-1'>Todo List</Label>
                    <div className='d-flex'>
                        <Input value={todo} placeholder='Enter Your Todo' onChange={(e) => setTodo(e?.target?.value)} onKeyUp={() => handelKey()} style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px", boxShadow: "none" }} />
                        <Button color='danger' style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", boxShadow: "none" }} onClick={() => dataHandler()}><Plus /></Button>
                    </div>
                </div>

                <div className='d-flex w-100 gap-4 justify-content-center mt-5'>
                    <Pending pending={pending} setPending={setPending} done={done} setDone={setDone} />
                    <Done done={done} setDone={setDone} pending={pending} setPending={setPending} />
                </div>
            </div>
        </>
    )
}
