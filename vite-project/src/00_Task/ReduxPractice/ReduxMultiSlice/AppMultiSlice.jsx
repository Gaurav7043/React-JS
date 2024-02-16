import React from 'react'
import Amount from './UI/Amount/Amount'
import Count from './UI/Count/Count'
import { Provider } from 'react-redux'
import Store from './Redux/App/Store'

export default function AppMultiSlice() {
    return (
        <>
            <Provider store={Store}>
                <Amount />
                <Count />
            </Provider>
        </>
    )
}
