import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Sports_Bike() {
    const navigate = useNavigate()

    return (
        <>
            <h1>Sports Bike</h1>
            <Button className='ms-2' color='danger' onClick={()=>navigate(-1)}>Go Back</Button>
        </>
    )
}
