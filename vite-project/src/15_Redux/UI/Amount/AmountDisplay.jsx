import React from 'react'
import { useSelector } from 'react-redux'

export default function AmountDisplay() {
    const amount = useSelector((store) => {
        return store.amountReducer.amount
    })

    return (
        <>
            <hr className='mt-3' style={{ width: "25%", margin: "auto" }} />
            <h1 className='text-center'>Amount is {amount}</h1>
        </>
    )
}
