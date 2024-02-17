import { createSlice } from "@reduxjs/toolkit";

const numSlice = createSlice({
    name: "number",
    initialState: { num: 400 },
    reducers: {
        incNum: (state, action)=>{
            state.num += 100
        },
        incByInput: (state, action)=>{
            state.amount += +action.payload
        }
    }
})

export default numSlice.reducer
export const { incNum, incByInput } = numSlice.actions