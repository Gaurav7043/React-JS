import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input } from 'reactstrap'
import { incAmt, inputBy } from './Redux/Fetures/Amount'

export default function AmountUpdate() {
    const dispach = useDispatch()
    let [input, setInput] = useState("")
    
    const addData = () => {
        dispach(inputBy(input))
        setInput("")
    }
    return (
        <>
            <div className='text-center'>
                <Button color="danger" onClick={() => dispach(incAmt())}>Inc</Button>
            </div>
            <div className='d-flex align-items-center justify-content-center gap-3 mt-3'>
                <Input value={input} className='w-25' placeholder='Enter Amount' onChange={(e) => setInput(e?.target?.value)} />
                <Button color='danger' onClick={() => addData()}>Inc By Input</Button>
            </div>
        </>
    )
}
