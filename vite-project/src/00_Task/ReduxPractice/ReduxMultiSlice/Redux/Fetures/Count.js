import { createSlice } from "@reduxjs/toolkit";

const countAmount = createSlice({
    name: "count",
    initialState: { count: 100 },
    reducers: {
        incCount: (state, action) => {
            // console.log("🚀 ~ action:", action)
            state.count += 20
        },
        incOne: (state, action) => {
            state.count += 30
        }
    }
})

export default countAmount.reducer
export const { incCount, incOne } = countAmount.actions