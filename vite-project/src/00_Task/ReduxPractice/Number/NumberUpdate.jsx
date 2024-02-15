import React from 'react'
import { Button } from 'reactstrap'
import { incNum } from './Redux/Fetures/Number'
import { useDispatch } from 'react-redux'

export default function NumberUpdate() {
    const dispatch = useDispatch()

    return (
        <>
            <div className="text-center">
                <Button color='danger' onClick={() => dispatch(incNum())}>Inc</Button>
            </div>
        </>
    )
}
