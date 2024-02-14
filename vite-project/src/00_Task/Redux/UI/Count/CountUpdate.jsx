import React from 'react'
import { Button } from 'reactstrap'
import { incFifty, incOne, incTen, incTwenty } from '../../Redux/Fetures/Count'
import { useDispatch } from 'react-redux'

export default function CountUpdate() {
    let dispatch = useDispatch()

    return (
        <>
            <hr />
            <div className='text-center mt-3 d-flex justify-content-evenly'>
                <Button color='danger' onClick={() => dispatch(incOne())}>Count</Button>
                <Button color='danger' onClick={() => dispatch(incTen())}>Amount</Button>
                <Button color='danger' onClick={() => dispatch(incFifty())}>Point</Button>
                <Button color='danger' onClick={() => dispatch(incTwenty())}>Number</Button>
            </div>
        </>
    )
}
