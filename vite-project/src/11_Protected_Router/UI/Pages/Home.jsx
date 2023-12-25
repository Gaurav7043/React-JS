import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

let nameArr = ["gaurav", "harsh", "som", "om"]

export default function Home() {
    const navigate = useNavigate()

    return (
        <>
            <div className='text-center'>
                <h1>Home</h1>
                <Button className='ms-2 mb-2' color='danger' onClick={()=>navigate(-1)}>Go Back</Button>
            </div>
        </>
    )
}