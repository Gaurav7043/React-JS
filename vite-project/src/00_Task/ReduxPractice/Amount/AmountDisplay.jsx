import React from 'react'
import { useSelector } from 'react-redux'

export default function AmountDisplay() {
    const amount = useSelector((store) => {
        return store.amountReducer.amount
    })

    return (
        <>
            <h1 className='text-center'>Amount is {amount}</h1>
        </>
    )
}
