import { createSlice } from "@reduxjs/toolkit";

const numSlice = createSlice({
    name: "number",
    initialState: { number: 700 },
    reducers: {
        incNum: (state, action)=>{
            state.number += 100
        }
    }
})

export default numSlice.reducer
export const { incNum } = numSlice.actions