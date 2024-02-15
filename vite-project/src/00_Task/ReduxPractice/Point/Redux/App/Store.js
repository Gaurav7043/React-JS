import { configureStore } from "@reduxjs/toolkit";
import pointReducer from '../Fetures/Point'

export default configureStore({
    reducer: {
        pointReducer
    }
})