import { configureStore } from "@reduxjs/toolkit";
import amtReducer from '../Fetures/Amount'
import countReducer from '../Fetures/Count'
import numReducer from '../Fetures/Number'


export default configureStore({
    reducer: {
        amtReducer,
        countReducer,
        numReducer,
    }
})