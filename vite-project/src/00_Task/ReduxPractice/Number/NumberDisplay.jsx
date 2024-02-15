import React from 'react'
import { useSelector } from 'react-redux'

export default function NumberDisplay() {
    const numSelector = useSelector((store) => {
        return store.numReducer.number
    })

    return (
        <>
            <h1 className="text-center">Number is {numSelector}</h1>
        </>
    )
}
