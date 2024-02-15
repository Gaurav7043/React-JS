import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
    name: "amount",
    initialState: {amount: 99},
    reducers: {
        incAmt: (state, action) => {
            console.log("=====action=======>", action)
            state.amount++
        }
    }
})

export default amountSlice.reducer
export const { incAmt } = amountSlice.actions