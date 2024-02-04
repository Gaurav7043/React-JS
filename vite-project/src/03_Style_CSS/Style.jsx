import React from "react";
import "./index.css"

export default function Style(){
    let div_style = {
        height : "200px",
        width : "200px",
        color : "white",
        background : "black",
        fontSize : "25px"
    }
    return(
        <>
            <h1 style={{color : "red", background : "blue"}}>Inline CSS</h1>
            <hr />
            <div style={div_style}>style variable</div>
            <hr />
            <div className="container sty">Hello External CSS</div>
            <hr />
            <div>
                <h1 className="text-danger text-center text-decoration-line-through m-4 border border-black p-3">Hello Bootstrap</h1>
            </div>
        </>
    )
}