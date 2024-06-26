import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../Config";

let token = JSON.parse(localStorage.getItem("token"));

export const fetchCart = createAsyncThunk("fetchCart", () => {
  return axios({
        method: "get",
        url: BE_URL + "/cart/getAll",
        headers: {
            authorization: `Beare ${token}`,
            "Content-Type": "application/json",
        }
    })?.then((res) => {
        // console.log("=====res.data.data====>", res?.data?.data)
        return res?.data;
    }
  );
});

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], cartId: "", error: "", pending: false },
  reducers: {},
  extraReducers: (builder) => {
      builder?.addCase(fetchCart.pending, (state, action)=>{
        state.pending = true
      })?.addCase(fetchCart.fulfilled, (state, { payload })=>{
        state.pending = false
        state.cart = payload.data
        state.cartId = payload.cartId
      })?.addCase(fetchCart.rejected, (state, action)=>{
        state.error = action.error.message
        state.pending = true
      })
  }
});

export default cartSlice.reducer;
export const {} = cartSlice.actions;
