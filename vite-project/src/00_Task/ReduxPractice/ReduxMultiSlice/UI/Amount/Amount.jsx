import React from 'react'
import { Provider } from 'react-redux'
import AmountDisplay from './AmountDisplay'
import AmountUpdate from './AmountUpdate'

export default function Amount() {
    return (
        <>
            <AmountDisplay />
            <AmountUpdate />
        </>
    )
}
