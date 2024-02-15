import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
    name: "count",
    initialState: {count: 999},
    reducers: {
        incOne: (state, action)=>{
            // console.log("====stateOne===>", state?.count)
            state.count++
        },
        incTen: (state, action)=>{
            // console.log("====stateTen===>", state?.count)
            state.count += 10
        }
    },
    extraReducers: (builder)=>{
        builder.addCase("amount/incAmt", (state, action)=>{
            state.count += 10
        })
    }
})

export default countSlice.reducer
export const { incOne, incTen } = countSlice?.actions