import React, { useReducer, useState } from 'react'
import { Button } from 'reactstrap'

export default function Use_Reducer_Component() {
    const reducer = (state, action)=>{
        console.log("---------state, action-----------", state, action)
        if(action === "INC"){
            return state + 1
        }else if(action === "DEC"){
            return state - 1
        }else if(action === "INCC"){
            return state + 5
        }else if(action === "DECC"){
            return state - 5
        }else{
            return state
        }
    }

    let [count, dispatch] = useReducer(reducer, 1000)

    return (
        <>
            <div className='mt-5 m-auto border dark w-25'>
                <h1 className='text-center'>Count is {count}</h1>
                <div className='m-auto text-center'>
                    <Button color='danger' className='mt-2 me-2 ms-2 mb-2' onClick={()=>dispatch("INC")}>Inc-1</Button>
                    <Button color='danger' className='mt-2 me-2 ms-2 mb-2' onClick={()=>dispatch("DEC")}>Dec-1</Button>
                    <Button color='danger' className='mt-2 me-3 ms-2 mb-2' onClick={()=>dispatch("INCC")}>Inc-5</Button>
                </div>
                <div className='m-auto text-center'>
                    <Button color='danger' className='mt-2 me-3 mb-2' onClick={()=>dispatch("DECC")}>Dec-5</Button>
                    <Button color='danger' className='mt-2 mb-2 ms-2' onClick={()=>dispatch("GALTI")}>Galti</Button>
                </div>
            </div>
        </>
    )
}

/*
export default function Use_Reducer_Component() {
    let [count, setCount] = useState(0)

    const addOne = ()=>setCount(count + 1)
    const subOne = ()=>setCount(count - 1)
    const addFive = ()=>setCount(count + 5)
    const subFive = ()=>setCount(count - 5)

    return (
        <>
            <div className='mt-5 m-auto border dark w-25'>
                <h1 className='text-center'>Count is {count}</h1>
                <Button color='danger' className='me-2 ms-2 mb-2' onClick={()=>addOne()}>Inc-1</Button>
                <Button color='danger' className='me-2 ms-2 mb-2' onClick={()=>subOne()}>Dec-1</Button>
                <Button color='danger' className='me-2 ms-2 mb-2' onClick={()=>addFive()}>Inc-5</Button>
                <Button color='danger' className='mb-2 ms-2' onClick={()=>subFive()}>Dec-5</Button>
            </div>
        </>
    )
}
*/