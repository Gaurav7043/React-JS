import { Plus, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Input, Label } from 'reactstrap'
import { toast } from "react-toastify";

export default function Local_Storage() {
    let [todo, set_todo] = useState("")
    let [todo_list, set_todo_list] = useState([])

    const add_todo = ()=>{
        let match = todo_list.some((e)=>{
            return e === todo
        })

        if(todo.length > 0){
            if(match){
                toast.error("User with the Same Data Already Exits")
            }else{
                // console.log(todo)
                set_todo_list([...todo_list, todo])
                localStorage.setItem("Todo List", JSON.stringify([...todo_list, todo]))
                set_todo("")
                toast.success("Data Added Successfully")
            }
        }else{
            toast.error("Please Fill Data")
        }
    }

    useEffect(()=>{
        let json_data = localStorage.getItem("Todo List")
        let normal_data = JSON.parse(json_data)
        // console.log(normal_data)
        set_todo_list(normal_data || [])
    }, [])

    const delete_handler =(index)=>{
        const filter_data = todo_list.filter((e, i) => i !== index);
        set_todo_list(filter_data);
        localStorage.setItem("todolist", JSON.stringify(filter_data));     
    }
    
    return (
        <>
            <h1 className='text-center'>Add Todo</h1>
            <Label style={{textAlign: "center", width: "100%"}}>Todo</Label>
            <hr className='w-50 m-auto mb-4' />
            <div className='w-50 gap-3 d-flex justify-content-center m-auto'>
                <Input value={todo} className='w-50' placeholder='Add Your Task' onChange={(e)=>set_todo(e?.target?.value)} />
                <Plus role='button' size={32} color='#545454' onClick={add_todo} />
            </div>

            {
                todo_list.length > 0 ?
                <div className='w-50 border border-1 dark rounded-3 p-4 mt-5 m-auto'>
                    <h3 className='text-center'>Your Todo List</h3>
                    <hr />
                    {
                        todo_list.map((e, i)=>{
                            return(
                                <div key={i} className='border-bottom border-1 dark mt-3 pb-2 d-flex justify-content-between'>
                                    <h6>{i + 1}. {e}</h6>
                                    <Trash role="button" color="#747272" onClick={()=>delete_handler(i)} />
                                </div>
                            )
                        })
                    }
                </div> :
                (
                    <h1 className="text-center mt-4">Please Add Some Todo</h1>
                ) 
            }
        </>
    )
}

// useEffect(()=>{
//     localStorage.setItem("test", "testttttt")
//     localStorage.setItem("test2", "testttttttttt")
//     localStorage.setItem("test2", "test")
// }, [])