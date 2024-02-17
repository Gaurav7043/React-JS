import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'
import { incByInput, incPoint } from './Redux/Fetures/Point'
import { useDispatch } from 'react-redux'

export default function PointUpdate() {
    const dispatch = useDispatch()
    let [input, setInput] = useState("")

    const addData = () => {
        dispatch(incByInput(input))
        setInput("")
    }

    return (
        <>
            <div className='text-center'>
                <Button color='danger' onClick={() => dispatch(incPoint())}>Inc</Button>
            </div>
            <div className='d-flex align-items-center justify-content-center gap-2 mt-2'>
                <Input className='w-25' value={input} placeholder='Enter Amount' onChange={(e) => setInput(e?.target?.value)} />
                <Button color='danger' onClick={() => addData()}>Inc By Input</Button>
            </div>
        </>
    )
}
