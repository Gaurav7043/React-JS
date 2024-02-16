import React from 'react'
import { useSelector } from 'react-redux'

export default function NumberDisplay() {
    const numSelector = useSelector((store) => {
        return store.numReducer.num
    })

    return (
        <>
            <hr className='mt-3' style={{ width: "350px", margin: "auto" }} />
            <h1 className='text-center'>Number is {numSelector}</h1>
        </>
    )
}
