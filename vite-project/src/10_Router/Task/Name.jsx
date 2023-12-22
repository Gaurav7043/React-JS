import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Name() {
    const navigate = useNavigate()
    const data = useParams()

    return (
        <>
            <div className='text-center'>
                <h1>My Name is {data.name}</h1>
                <Button color="danger" onClick={()=>navigate("/")}>Go Back</Button>
            </div>
        </>
    )
}
