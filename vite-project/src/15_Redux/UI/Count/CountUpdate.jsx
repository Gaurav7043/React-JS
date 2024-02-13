import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { incOne} from '../../Redux/Fetures/Count'

export default function CountUpdate() {
    let dispatch = useDispatch()

    return (
        <>
            <hr style={{width: "25%", margin: "auto"}} />
            <div className='text-center mt-3'>
                <Button color="danger" onClick={()=>dispatch(incOne())}>Inc-1</Button>
            </div>
        </>
    )
}
