import React from 'react'
import { Button } from 'reactstrap'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Service() {
    const navigate = useNavigate()

    return (
        <>
            <h1>Service</h1>
            <div className='d-flex gap-2 ms-1'>
                <Button color='danger' onClick={()=>navigate("/service/car")}>Car</Button>
                <Button color='danger' onClick={()=>navigate("/service/bike")}>Bike</Button>
            </div>

            <Outlet/>
        </>
    )
}
