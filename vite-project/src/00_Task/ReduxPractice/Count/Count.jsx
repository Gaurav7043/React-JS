import React from 'react'
import CountDisplay from './CountDisplay'
import CountUpdate from './CountUpdate'
import { Provider } from 'react-redux'
import Store from './redux/App/Store'

export default function Count() {
    return (
        <>
            <Provider store={Store}>
                <CountDisplay />
                <CountUpdate />
            </Provider>
        </>
    )
}
