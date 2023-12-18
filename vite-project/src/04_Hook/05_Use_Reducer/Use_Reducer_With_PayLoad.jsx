import React, { useReducer } from 'react'
import { Button } from 'reactstrap'

export default function Use_Reducer_With_PayLoad() {
    const reducer = (state, action)=>{
        if(action.actionType === "INC"){
            return {count : state.count + action.payLoad}
        }else{
            return state
        }
    }
    let [count, dispatch] = useReducer(reducer, {count : 1000})

    return (
        <>
            <div>
                <h1 className='text-center'>Count is : {count.count}</h1>
                <div className='mt-3' style={{textAlign: "center"}}>
                    <Button color='danger' onClick={()=>dispatch({actionType : "INC", payLoad: 10})}>INC By Number</Button>
                </div>
            </div>
        </>
    )
}