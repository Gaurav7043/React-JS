import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Full_Information() {
    const navigate = useNavigate()
    const data = useParams()

    return (
        <>
            <div className="text-center">
                <h1>My Name is {data.name}</h1>
                <h1>My Age is {data.age}</h1>
                <Button color="danger" onClick={()=>navigate("/")}>Go Back</Button>
            </div>
        </>
    )
}