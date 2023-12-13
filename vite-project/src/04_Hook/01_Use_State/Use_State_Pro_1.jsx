import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function Use_State_Pro_1() {
    let [color, set_color] = useState("red")
    let [text_color, set_text_color] = useState("black")

    const change_color_handler = ()=>{
        console.log("=====>")
        set_color("lightCoral")
        set_text_color("white")
    }

    return (
        <div className='d-flex flex-column justify-content-center'>
            <div style={{padding : "10px", margin : "10px", textAlign : "center", color : text_color, background : color}}>
                <h1>Hello World</h1>
            </div>
            <Button color="danger" onClick={()=>change_color_handler()}>Change Color</Button>
        </div>
    )
}
