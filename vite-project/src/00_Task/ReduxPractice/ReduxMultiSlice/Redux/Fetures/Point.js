import { createSlice } from "@reduxjs/toolkit";

const pointSlice = createSlice({
    name: "point",
    initialState: { point: 300 },
    reducers: {
        incPoint: (state, action)=>{
            state.point += 300
        }
    }
})

export default pointSlice.reducer
export const { incPoint } = pointSlice.actions