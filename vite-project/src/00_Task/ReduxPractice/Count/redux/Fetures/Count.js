import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",
    initialState: { count: 500 },
    reducers: {
        incCount: (state, action)=>{
            state.count += 50
        },
        incByInput: (state, action) => {
            // console.log("=======action===>", action)
            state.count += +action.payload
        }
    }
})

export default countSlice.reducer
export const { incCount, incByInput } = countSlice.actions