import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input } from 'reactstrap'
import { incByInput, incCount } from './redux/Fetures/Count'

export default function CountUpdate() {
    const dispatch = useDispatch()
    let [input, setInput] = useState("")

    const addData = ()=>{
        dispatch(incByInput(input))
        setInput("")
    }

    return (
        <>
            <div className="text-center">
                <Button color='danger' onClick={()=>dispatch(incCount())}>Inc</Button>
            </div>
            <div className='d-flex align-items-center justify-content-center gap-2 mt-3'>
                <Input value={input} className='w-25' placeholder='Enter Amount' onChange={(e)=>setInput(e?.target?.value)} />
                <Button color='danger' onClick={()=>addData()}>Inc By Input</Button>
            </div>
        </>
    )
}
