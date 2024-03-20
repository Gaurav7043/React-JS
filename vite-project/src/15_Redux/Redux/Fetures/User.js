import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export let loginApi = createAsyncThunk("userLogin", (data)=>{
    // console.log("===data====>", data)
    return axios({
        method: "post",
        url: "http://localhost:9999/user/signin",
        data,
        // data:{ email:"admin@admin.com", password: "123456" }
    }).then((res)=>{
        console.log("===res==>", res.data)
        return res.data.data
    })
})

const userSlice = createSlice({
    name: "user",
    initialState: { user: {}, pending: false, error: ""},
    reducers: {
        addUser: (state, action)=>{}
    },
    extraReducers: (builder)=>{
        builder.addCase(loginApi.pending, (state, action)=>{
            state.pending= true
        }).addCase(loginApi.fulfilled, (state, action)=>{
            // console.log("===action_fulfilled====>", action)
            state.user= action.payload
            state.pending= false
        }).addCase(loginApi.rejected, (state, action)=>{
            console.log("===action_rejected====>", action)
            state.error= action.error.message
            state.pending= false
        })
    }
})

export default userSlice.reducer
export const { addUser } = userSlice.actions
