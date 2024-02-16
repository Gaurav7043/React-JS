import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { incPoint } from '../../Redux/Fetures/Point'

export default function PointUpdate() {
    const dispatch = useDispatch()

    return (
        <>
            <div className='text-center'>
                <Button color='danger' onClick={()=>dispatch(incPoint())}>Inc</Button>
            </div>
        </>
    )
}
