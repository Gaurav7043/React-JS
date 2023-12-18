import React, { useReducer, useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function Use_Reducer_With_PayLoad_Input() {
    const reducer = (state, action)=>{
        if(action.actionType === "INC"){
            return {count : state.count + action.payLoad}
        }else{
            return state
        }
    }
    let [count, dispatch] = useReducer(reducer, {count : 1000})
    let [inpValue, setInpValue] = useState("")

    const inpHandler = (e)=>{
        const value = parseInt(e.target.value, 10)
        if(!isNaN(value)){
            setInpValue(value)
        }
    }

    // function submit(){
    //     dispatch({actionType : "INC", payLoad: +inpValue})
    //     setInpValue("")
    // }

    return (
        <>
            <div>
                <h1 className='text-center'>Count is : {count.count}</h1>
                <div className='mt-3' style={{textAlign: "center"}}>
                    <Input type='text' placeholder='Enter your Number' className='w-25 mb-3 text-center m-auto' value={inpValue} onChange={inpHandler}/>
                    {/* <Button color='danger' onClick={submit}>INC By Number</Button> */}
                    <Button color='danger' onClick={()=>dispatch({actionType : "INC", payLoad: +inpValue, blank : setInpValue("")})}>INC By Number</Button>
                </div>
            </div>
        </>
    )
}