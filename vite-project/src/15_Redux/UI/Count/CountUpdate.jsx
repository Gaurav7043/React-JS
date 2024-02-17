import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input } from 'reactstrap'
import { incByInput, incOne, incTen } from '../../Redux/Fetures/Count'

export default function CountUpdate() {
    let dispatch = useDispatch()
    let [input, setInput] = useState("")

    const addCount = ()=>{
        dispatch(incByInput(input))
        setInput("")
    }

    return (
        <>
            <div className='text-center mt-3'>
                <Button className='me-3' color="danger" onClick={() => dispatch(incOne())}>Inc-1</Button>
                <Button color="danger" onClick={() => dispatch(incTen())}>Inc-10</Button>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-3 gap-2'>
                <Input value={input} className='w-25' placeholder='Enter Amount' onChange={(e)=>setInput(e?.target?.value)} />
                <Button color='danger' onClick={()=>addCount()}>Inc-By-Input</Button>
            </div>
        </>
    )
}
