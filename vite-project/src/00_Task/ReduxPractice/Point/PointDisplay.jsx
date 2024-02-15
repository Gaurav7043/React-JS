import React from 'react'
import { useSelector } from 'react-redux'

export default function PointDisplay() {
    const pointSelector = useSelector((store) => {
        return store.pointReducer.point
    })

    return (
        <>
            <h1 className="text-center">Point is {pointSelector}</h1>
        </>
    )
}
