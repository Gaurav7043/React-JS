import React from 'react'
import { useSelector } from 'react-redux'

export default function CountDisplay() {
    const countSelector = useSelector((store) => {
        return store.countReducer.count
    })

    return (
        <>
            <hr className='mt-3' style={{width: "350px", margin: "auto"}} />
            <h1 className="text-center">Count is {countSelector}</h1>
        </>
    )
}
