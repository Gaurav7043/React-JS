import React, { useContext} from 'react'
import { NameContext } from "./Use_Context_Com"

export default function Com_B3({name3}) {
    const data = useContext(NameContext)
    
    return (
        <>
            <h1 className='text-center'>1. My Name is {name3}</h1>
            <h1 className='text-center'>2. My Name is {data}</h1>
        </>
    )
}
