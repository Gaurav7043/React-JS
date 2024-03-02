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
        <div className='d-flex gap-5 border dark p-2 m-2'>
            <div style={{ flex: "1" }}>
                <Inp1 value={value} setValue={setValue} />
            </div>
            <div style={{ flex: "1" }}>
                <Inp2 value={value} setValue={setValue} />
            </div>
        </div>
    )
}
