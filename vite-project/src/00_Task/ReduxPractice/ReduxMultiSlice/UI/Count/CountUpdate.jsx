import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { incCount, incOne } from '../../Redux/Fetures/Count'

export default function CountUpdate() {
    const dispatch = useDispatch()

    return (
        <>
            <div className='text-center'>
                <Button color='danger' className='me-4' onClick={()=>dispatch(incOne())}>Inc</Button>
                <Button color='danger' onClick={()=>dispatch(incCount())}>Inc</Button>
            </div>
        </>
    )
}
