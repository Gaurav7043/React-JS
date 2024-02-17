import { createSlice } from "@reduxjs/toolkit";

const amtSlice = createSlice({
    name: "amount",
    initialState: { amount: 200.1 },
    reducers: {
        incAmt: (state, action) => {
            state.amount += 30.1
        },
        incByInput: (state, action)=>{
            state.amount += +action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase("count/incCount", (state, action)=>{
            state.amount += 10
        })
    }
})

export default amtSlice.reducer
export const { incAmt, incByInput } = amtSlice.actions