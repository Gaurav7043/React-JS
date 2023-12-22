import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function User() {
    const navigate = useNavigate("")
    
    // to get params data from url
    const data = useParams()    

    return (
        <>
            <h1>Hello {data?.name}</h1>
            <Button color='danger ms-3' onClick={()=>navigate("/")} >Back To Home</Button>
        </>
    )
}
