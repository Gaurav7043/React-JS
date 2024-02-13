import React from 'react'
import { useSelector } from 'react-redux'

export default function CountDisplay() {
    let data = useSelector((store) => {
        // console.log("=====store==========>", store)
        return store.COUNT
    })
    // console.log("======data======>", data)
    
    return (
        <>
            <h1 className='text-center'>Count is {data?.count}</h1>
        </>
    )
}
