import React from 'react'
import { useSelector } from 'react-redux'

export default function PointDisplay() {
    const pointSelector = useSelector((store) => {
        return store.pointReducer.point
    })

    return (
        <>
            <hr className='mt-3' style={{ width: "350px", margin: "auto" }} />
            <h1 className='text-center'>Point is {pointSelector}</h1>
        </>
    )
}
