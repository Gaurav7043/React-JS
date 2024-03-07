import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Fetures/Auth/AuthSlice"

export default configureStore({
    reducer: {
        authSlice : authReducer,
    }
})