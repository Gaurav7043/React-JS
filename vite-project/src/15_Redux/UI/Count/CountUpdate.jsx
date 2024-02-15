import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { incOne, incTen} from '../../Redux/Fetures/Count'

export default function CountUpdate() {
    let dispatch = useDispatch()

    return (
        <>
            <div className='text-center mt-3'>
                <Button className='me-3' color="danger" onClick={()=>dispatch(incOne())}>Inc-1</Button>
                <Button color="danger" onClick={()=>dispatch(incTen())}>Inc-10</Button>
            </div>
        </>
    )
}
