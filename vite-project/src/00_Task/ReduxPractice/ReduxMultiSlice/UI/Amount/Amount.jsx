import React from 'react'
import { Provider } from 'react-redux'
import AmountDisplay from './AmountDisplay'
import AmountUpdate from './AmountUpdate'
import Store from '../../Redux/App/Store'

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
