import React, { useState } from 'react'
import Inp1 from './Inp1'
import Inp2 from './Inp2'

const initializeData = {
    email: "",
    password: "",
}

export default function InpMain() {
    let [value, setValue] = useState(initializeData)

    return (
        <>
            <Inp1 value={value} setValue={setValue} />
            <Inp2 value={value} setValue={setValue} />
        </>
    )
}
