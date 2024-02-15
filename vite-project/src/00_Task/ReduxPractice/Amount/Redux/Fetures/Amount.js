import { createSlice } from "@reduxjs/toolkit"

const amountSlice = createSlice({
    name: "amount",
    initialState: { amount : 200 },
    reducers: {
        incAmt: (state, action)=>{
            state.amount += 20
        }
    }
})

export default amountSlice.reducer
export const { incAmt } = amountSlice.actions