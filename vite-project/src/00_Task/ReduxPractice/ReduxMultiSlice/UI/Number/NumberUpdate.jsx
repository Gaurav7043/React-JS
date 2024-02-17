import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input } from 'reactstrap'
import { incByInput, incNum } from '../../Redux/Fetures/Number'

export default function NumberUpdate() {
    const dispatch = useDispatch()
    let [input, setInput] = useState("")

    const addData = () => {
        dispatch(incByInput(input))
        setInput("")
    }

    return (
        <>
            <div className='text-center'>
                <Button color='danger' onClick={() => dispatch(incNum())}>Inc</Button>
            </div>
            <div className='d-flex align-items-center justify-content-center gap-2 mt-3'>
                <Input value={input} placeholder='Enter Amount' className='w-25' onChange={(e) => setInput(e?.target?.value)} />
                <Button color='danger' onClick={() => addData()}>Inc By Input</Button>
            </div>
        </>
    )
}
