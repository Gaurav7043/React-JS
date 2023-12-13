import React, { useEffect, useRef } from 'react'
import { Button, Input } from 'reactstrap'

export default function Use_Ref_Component() {
    const div_ref = useRef(null)
    const input_ref = useRef(null)

    const change_color = ()=>{
        // console.log("=======>", div_ref);
        div_ref.current.style.background = "black"
        div_ref.current.style.color = "white"
        div_ref.current.innerText = "Hello"
        input_ref.current.value = "Please Search Here"
    }

    useEffect(()=>{
        input_ref.current.focus()
    },[])

    return (
        <>
            <div className='mt-3 m-auto' style={{height: "100px", width: "100px", background: "red"}} ref={div_ref}></div>
            <input className='mt-3' type="text" style={{display: "block", margin: "auto"}} ref={input_ref}/>
            {/* <Input className='mt-3 w-25' type="text" style={{display: "block", margin: "auto"}} ref={input_ref}/> */}
            <Button className='mt-3' style={{display: "block", margin: "auto"}} onClick={()=>change_color()}>Change Color</Button>
        </>
    )
}
