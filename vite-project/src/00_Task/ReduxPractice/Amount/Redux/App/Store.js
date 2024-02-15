import { configureStore } from "@reduxjs/toolkit";
import amountReducer from '../Fetures/Amount'

export default configureStore({
    reducer: {
        amountReducer
    }
})