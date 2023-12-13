import React, { useContext } from 'react'
import { NameContext } from './Use_Context_Com'

export default function Com_A() {
    const data = useContext(NameContext)

    return (
        <>
            <h1 className='text-center'>Com_A = {data}</h1>
        </>
    )
}
