import { configureStore } from "@reduxjs/toolkit";
import numReducer from '../Fetures/Number'

export default configureStore({
    reducer: {
        numReducer
    }
})