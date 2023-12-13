import React, {useEffect} from 'react'

export default function Prop_Use_Effect({count_1}) {
    useEffect(()=>{
        alert("Just Test")
    }, [count_1])

    return (
        <>
            <hr style={{width: "100vh"}}/>
            <h1>Props Use Effect</h1>
            <h1>Count is {count_1}</h1>
        </>
    )
}

/*
useEffect(()=>{
everytime
})

useEffect(()=>{
only first time
},[])

useEffect(()=>{
when count update
},[count])
*/