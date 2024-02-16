import React from 'react'
import { useSelector } from 'react-redux'

export default function AmountDisplay() {
    const amtSelector = useSelector((store) => {
        return store.amtReducer.amount
    })

    return (
        <>
            <h1 className="text-center">Amount is {amtSelector}</h1>
        </>
    )
}
