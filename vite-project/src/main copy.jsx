import React from "react";
import ReactDOM from "react-dom/client";
import Fun_Com from "./02_Component/02_Functional/Fun_Com";
// import Fun_Com from "./02_Component/02_Functional/Fun_Com";

let obj = {name : "Gaurav", age : 22}
let x = <h1>What is this.?</h1>
let arr = ["Gaurav", "Harsh", "som"]
let namediv = arr.map((e)=>{
  return <h1>{e}</h1>
})

const rooot = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <h1>Hello World </h1>
    <h1>Hello World </h1>
    <h1>Hello World </h1> */}

    {/* ---use {} to write js---- */}
    {/* <h1>{13 + 13}</h1> */}
    {x}

    {/* ------use of map */}
    {arr.map((e)=>{
      return <h1>{e}</h1>
    })}
    <hr />
    {namediv}

    {/* ---can't print object (run time error)--- */}
    <h1>{obj.age}</h1>
    <hr />

    {/* ---can print array--- */}
    <h1>{arr}</h1>

    {/* ----print value of array */}
    {/* <h1>{arr[0]}</h1>
    <h1>{arr[1]}</h1>
    <h1>{arr[2]}</h1> */}

    {/* ---component--- */}
    <Fun_Com />
  </React.StrictMode>
)
