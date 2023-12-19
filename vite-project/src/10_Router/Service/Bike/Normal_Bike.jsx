import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Normal_Bike() {
    const navigate = useNavigate()
    return (
        <>
            <h1>Normal Bike</h1>
            <Button className='ms-2' color='danger' onClick={()=>navigate(-1)}>Go Back</Button>
        </>
    )
}
