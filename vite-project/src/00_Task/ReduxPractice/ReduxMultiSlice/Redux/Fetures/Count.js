import { createSlice } from "@reduxjs/toolkit";

const countAmount = createSlice({
    name: "count",
    initialState: { count: 100 },
    reducers: {
        incCount: (state, action)=>{
            state.count += 20
        }
    }
})

export default countAmount.reducer
export const { incCount } = countAmount.actions