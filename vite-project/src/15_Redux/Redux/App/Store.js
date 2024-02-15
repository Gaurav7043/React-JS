import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Fetures/Count"
import amountReducer from "../Fetures/Amount"

export default configureStore({
    reducer: {
        COUNT: countReducer,
        amountReducer,
    }
})

let store = {
    COUNT: {
        count: 999,
    },
    amountReducer: {
        amount: 99,
    }
}

function Print(params){
    return "store"
}

const PrintFun = Print("sjk")
console.log("===>", PrintFun)

const PrintFun1 = Print
console.log("===>", PrintFun1)
