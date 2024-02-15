import React from 'react'
import Count from './UI/Count/Count'
import { Provider } from "react-redux"
import Store from './Redux/App/Store'
import Amount from './UI/Amount/Amount'

export default function AppRedux() {
    return (
        <>
            <Provider store={Store}>
                <Count />
                <Amount />
            </Provider>
        </>
    )
}
