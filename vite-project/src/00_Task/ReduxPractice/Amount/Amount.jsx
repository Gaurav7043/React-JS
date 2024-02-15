import React from 'react'
import AmountDisplay from './AmountDisplay'
import AmountUpdate from './AmountUpdate'
import { Provider } from 'react-redux'
import Store from './Redux/App/Store'

export default function Amount() {
    return (
        <>
            <Provider store={Store}>
                <AmountDisplay />
                <AmountUpdate />
            </Provider>
        </>
    )
}
