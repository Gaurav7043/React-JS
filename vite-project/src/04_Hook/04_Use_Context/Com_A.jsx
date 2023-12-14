import React, { useContext } from 'react'
import { NameContext, AgeContext } from './Use_Context_Com'

export default function Com_A() {
    const data = useContext(NameContext)
    const { age } = useContext(AgeContext)

    return (
        <>
            <h1 className='text-center'>Com_A = {data}</h1>
            <h1 className='text-center'>Age is {age}</h1>
        </>
    )
}
