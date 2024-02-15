import React from 'react'
import { useSelector } from 'react-redux'

export default function CountDisplay() {
    const count = useSelector((store)=>{
        return store.countReducer.count
    })

    return (
        <>
            <h1 className="text-center">Count is {count}</h1>
        </>
    )
}
