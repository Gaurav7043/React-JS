import React, { useReducer } from 'react'
import { Button } from 'reactstrap'

export default function Use_Reducer_Component_Task() {
    const reducer = (state, action)=>{
        console.log("---------state, action-----------", state, action)
        if(action === "INC"){
            return {count: state.count + 1}
        }else if(action === "DEC"){
            return {count: state.count - 1}
        }else{
            return state
        }
    }

    let [state, dispatch] = useReducer(reducer, {count : 100})

    return (
        <>
            <div className='mt-5 m-auto border dark w-25'>
                <h1 className='text-center'>Count is {state.count}</h1>
                <div className='m-auto text-center'>
                    <Button color='danger' className='mt-2 me-2 ms-2 mb-2' onClick={()=>dispatch("INC")}>Inc-1</Button>
                    <Button color='danger' className='mt-2 me-2 ms-2 mb-2' onClick={()=>dispatch("DEC")}>Dec-1</Button>
                </div>
            </div>
        </>
    )
}