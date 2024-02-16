import React from 'react'
import AppAmountRedux from './Amount/AppAmountRedux'
import AppCountRedux from './Count/AppCountRedux'
import AppNumberRedux from './Number/AppNumberRedux'
import AppPointRedux from './Point/AppPointRedux'
import AppMultiSlice from './ReduxMultiSlice/AppMultiSlice'

export default function ReduxPratice() {
    return (
        <>
            {/* <AppAmountRedux /> */}
            {/* <AppCountRedux /> */}
            {/* <AppNumberRedux /> */}
            {/* <AppPointRedux /> */}

            {/* =====ReducerMultiSlice===== */}
            <AppMultiSlice />
        </>
    )
}
