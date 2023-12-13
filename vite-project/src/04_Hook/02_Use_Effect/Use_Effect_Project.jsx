import React, {useEffect, useState} from 'react'
import { Button } from 'reactstrap'
const user_name = ["om", "urvish", "meet", "manhor", "saif", "vivek", "nimesh", "nidhipriya"]

export default function Use_Effect_Project() {
    const [index, set_index] = useState(0)
    const [count, set_count] = useState(0)

    useEffect(()=>{
        if(user_name[index].length >= 6){
            alert("Name is a too Long")
        }
    }, [index])

    const change_name_handler = ()=>{
        if(user_name.length - 2 < index){
            set_index(0)
        }else{
            set_index(index + 1)
        }
    }
    return (
        <>
            <div className='border border-black p-4 d-flex gap-3 flex-column'>
                <h1>Name is {user_name[index]}</h1>
                <h1>Count is {count}</h1>
                <Button color="danger" onClick={()=>change_name_handler()}>Change Name</Button>
                <Button color='danger' onClick={()=>set_count(count + 1)}>Inc</Button>
            </div>
        </>
    )
}
