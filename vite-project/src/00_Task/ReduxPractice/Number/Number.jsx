import React from 'react'
import { Provider } from 'react-redux'
import Store from './Redux/App/Store'
import NumberDisplay from './NumberDisplay'
import NumberUpdate from './NumberUpdate'

export default function Number() {
    return (
        <>
            <Provider store={Store}>
                <NumberDisplay />
                <NumberUpdate />
            </Provider>
        </>
    )
}
