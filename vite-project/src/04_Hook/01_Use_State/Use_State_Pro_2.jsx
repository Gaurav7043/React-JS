import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function Use_State_Pro_2() {
  const color_arr = ["white", "blue", "red", "pink", "orange", "yellow", "green", "springgreen", "orangered", "purple"]
  let [index, set_index] = useState(0)
  // set_index(index + 1)

  let change_index = ()=>{
    if(index < color_arr.length -1){
      set_index(index + 1)
    }
  }
  
  return (
    <div className='d-flex flex-column justify-content-center'>
      <h1>{index}</h1>
      <div style={{padding : "10px", margin : "10px", textAlign : "center", background : color_arr[index]}}>
        <h1>Hello World</h1>
      </div>
      <Button color = "danger" onClick = {()=>change_index()}>Change Color</Button>
    </div>
  )
}
