import React, {useEffect, useState} from 'react'
import { Button } from 'reactstrap'
import Prop_Use_Effect from './Prop_Use_Effect'

export default function Use_Effect_Component() {
    let [count_1, set_count_1] = useState(0)
    let [count_2, set_count_2] = useState(0)
    
    // call every time
    // useEffect(()=>{
    //     console.log("----------Without Dependency-------")
    // })

    // 
    useEffect(()=>{
        console.log("----------With blank Array Dependency-------")
    },[])

    useEffect(()=>{
        console.log("----------With Count-1 Dependency-------")
        // if(count_1 % 5 === 0 && count_1 !== 0){
        //     alert(`Count-1 is ${count_1}`)
        // }
    },[count_1])

    useEffect(()=>{
        console.log("----------With Count-2 Dependency-------")
        // if(count_2 % 2 === 0 && count_2 !== 0){
        //     alert(`Count-2 is ${count_2}`)
        // }
    },[count_2])

    useEffect(()=>{
        console.log("----------With Count-1 & Count-2 Dependency-------")
    },[count_1, count_2])

    return (
        <>
            <h1>Use Effect</h1>
            <hr style={{width: "100vh"}}/>
            <h1>Count_1 is {count_1}</h1>
            <Button color="danger" onClick={()=>set_count_1(count_1 + 1)}>Inc-Count</Button>
            <hr style={{width: "100vh"}}/>
            <h1>Count_2 is {count_2}</h1>
            <Button color="danger" onClick={()=>set_count_2(count_2 + 1)}>Inc-Count</Button>
            <Prop_Use_Effect count_1={count_1}/>
        </>
    )
}