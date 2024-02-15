import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { incAmt } from '../../Redux/Fetures/Amount'

export default function AmountUpdate() {
    const dispatch = useDispatch()

    return (
        <>
            <div className='text-center'>
                <Button color='danger' onClick={()=>dispatch(incAmt())}>Inc</Button>
            </div>
        </>
    )
}
