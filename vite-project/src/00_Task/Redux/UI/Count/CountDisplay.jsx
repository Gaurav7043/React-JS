import React from 'react'
import { useSelector } from 'react-redux'

export default function CountDisplay() {
    let data = useSelector((store) => {
        // console.log("=====store=======>", store)
        return store.COUNT
    })
    // console.log("=====data====>", data)

    return (
        <>
            <div className='d-flex justify-content-evenly'>
                <h1 className='text-center'>Count is {data.count}</h1>
                <h1 className='text-center'>Amount is {data.amount}</h1>
                <h1 className='text-center'>Point is {data.point}</h1>
                <h1 className='text-center'>Number is {data.number}</h1>
            </div>
        </>
    )
}
