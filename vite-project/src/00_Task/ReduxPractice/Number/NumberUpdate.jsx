import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'
import { incByInput, incNum } from './Redux/Fetures/Number'
import { useDispatch } from 'react-redux'

export default function NumberUpdate() {
    const dispatch = useDispatch()
    let [input, setInput] = useState("")

    const addData = ()=>{
        dispatch(incByInput(input))
        setInput("")
    }

    return (
        <>
            <div className="text-center">
                <Button color='danger' onClick={() => dispatch(incNum())}>Inc</Button>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-3 gap-2'>
                <Input value={input} className='w-25' placeholder='Enter Amount' onChange={(e)=>setInput(e?.target?.value)} />
                <Button color='danger' onClick={()=>addData()}>Inc By Input</Button>
            </div>
        </>
    )
}
