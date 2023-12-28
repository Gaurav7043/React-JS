import React from 'react'
import { Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

export default function Error() {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h1>Error</h1>
                <Button color='danger' onClick={()=>navigate("/")}>Go Home</Button>
            </div>
        </>
    )
}
