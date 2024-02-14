import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Fetures/Count"

export default configureStore({
    reducer: {
        COUNT : countReducer
    },
})

// let store = {
//     COUNT: {
//         count: 999,
//     }
// }