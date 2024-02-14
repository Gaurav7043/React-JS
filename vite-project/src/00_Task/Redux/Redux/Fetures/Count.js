import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
    name: "count",
    initialState: { count: 999, amount: 500, point: 200, number: 100 },
    reducers: {
        incOne: (state, action)=>{
            // console.log("========state=========>", state.count)
            state.count++
        },
        incTen: (state, action)=>{
            state.amount += 10
        },
        incFifty: (state, action)=>{
            state.point += 50
        },
        incTwenty: (state, action)=>{
            state.number +=20
        }  
    },
})

export default countSlice.reducer
export const { incOne, incTen, incFifty, incTwenty } = countSlice.actions