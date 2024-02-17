import { createSlice } from "@reduxjs/toolkit";

const pointSlice = createSlice({
    name: "point",
    initialState: { point: 300 },
    reducers: {
        incPoint: (state, action)=>{
            state.point += 300
        },
        incByInput: (state, action)=>{
            state.point += +action.payload
        }
    }
})

export default pointSlice.reducer
export const { incPoint, incByInput } = pointSlice.actions