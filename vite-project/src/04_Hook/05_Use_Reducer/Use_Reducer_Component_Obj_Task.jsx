import React, { useReducer } from 'react'
import { Button } from 'reactstrap'

export default function Use_Reducer_Component_Obj_Task() {
    let reducer = (state, action) => {
        if (action.actiontype == "Inc") {
            return {...state, count : state.count + action.playload}
        }else if (action.actiontype = "AMT") {
            return {...state, amount : state.amount + action.playload}
        }
    }

    let [count, dispatch] = useReducer(reducer, { count : 1000, amount : 2000 })

    return (
        <>
            <div className='m-auto w-25 border dark p-3 mt-3'>
                <h1>Count :- {count.count}</h1>
                <h1>Amount :- {count.amount}</h1>
                <div className='w-100 d-flex gap-3 mt-3' style={{marginLeft : "43px"}}>
                    <Button className="w-25" color='danger' onClick={() => dispatch({ actiontype: "Inc", playload: 10 })}>Count</Button>
                    <Button className="w-25" color='danger' onClick={() => dispatch({ actiontype: "AMT", playload: 10 })}>Amount</Button>
                </div>
            </div>
        </>
    )
}