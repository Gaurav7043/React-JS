import React from 'react'
import { Button } from 'reactstrap'
import { incPoint } from './Redux/Fetures/Point'
import { useDispatch } from 'react-redux'

export default function PointUpdate() {
    const dispatch = useDispatch()

    return (
        <>
            <div className='text-center'>
                <Button color='danger' onClick={() => dispatch(incPoint())}>Inc</Button>
            </div>
        </>
    )
}
