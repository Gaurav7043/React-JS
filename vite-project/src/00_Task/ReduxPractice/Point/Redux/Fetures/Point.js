import { createSlice } from "@reduxjs/toolkit";

const pointSlice = createSlice({
    name: "point",
    initialState: { point: 200 },
    reducers: {
        incPoint: (state, action)=>{
            state.point += 30
        }
    }
})

export default pointSlice.reducer
export const { incPoint } = pointSlice.actions