import { configureStore } from "@reduxjs/toolkit";
import amtReducer from '../Fetures/Amount'
import countReducer from '../Fetures/Count'


export default configureStore({
    reducer: {
        amtReducer,
        countReducer
    }
})