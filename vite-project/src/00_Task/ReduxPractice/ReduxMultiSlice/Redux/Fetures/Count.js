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
        },
        incByInput: (state, action) =>{
            state.count += action.payload
        }
    }
})

export default countAmount.reducer
export const { incCount, incOne, incByInput } = countAmount.actions