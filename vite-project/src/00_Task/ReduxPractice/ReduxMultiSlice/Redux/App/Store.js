import { configureStore } from "@reduxjs/toolkit";
import amtReducer from '../Fetures/Amount'

export default configureStore({
    reducer: {
        amtReducer
    }
})