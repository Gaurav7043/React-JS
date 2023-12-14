import React, { useContext} from 'react'
import { NameContext, AgeContext } from "./Use_Context_Com"

export default function Com_B3({name3}) {
    const data = useContext(NameContext)
    
    // can't get data because we not warp comB in AgeContext
    const data2 = useContext(AgeContext)
    console.log("🚀 ~ file: Com_B3.jsx:7 ~ Com_B3 ~ data2:", data2)
    
    return (
        <>
            <h1 className='text-center'>1. My Name is {name3}</h1>
            <h1 className='text-center'>2. My Name is {data}</h1>
        </>
    )
}
