import React from 'react'
import { Provider } from 'react-redux'
import PointDisplay from './PointDisplay'
import PointUpdate from './PointUpdate'
import Store from './Redux/App/Store'

export default function Point() {
    return (
        <>
            <Provider store={Store}>
                <PointDisplay/>
                <PointUpdate/>
            </Provider>
        </>
    )
}
