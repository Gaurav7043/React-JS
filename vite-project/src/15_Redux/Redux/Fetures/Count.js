import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
    name: "count",
    initialState: {count: 999},
    reducers: {
        incOne: (state, action)=>{
            console.log("====state===>", state?.count)
            state.count++
        }
    },
})

export default countSlice.reducer
export const { incOne } = countSlice?.actions