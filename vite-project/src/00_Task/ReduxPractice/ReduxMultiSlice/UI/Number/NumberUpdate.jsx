import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { incNum } from '../../Redux/Fetures/Number'

export default function NumberUpdate() {
    const dispatch = useDispatch()

    return (
        <>
            <div className='text-center'>
                <Button color='danger' onClick={() => dispatch(incNum())}>Inc</Button>
            </div>
        </>
    )
}
