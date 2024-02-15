import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",
    initialState: { count: 500 },
    reducers: {
        incCount: (state, action)=>{
            state.count += 50
        }
    }
})

export default countSlice.reducer
export const { incCount } = countSlice.actions