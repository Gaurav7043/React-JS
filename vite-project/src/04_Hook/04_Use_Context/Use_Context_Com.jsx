import React, { createContext, useState } from 'react'
import Com_A from './Com_A'
import Com_B from './Com_B'

export const NameContext = createContext()

export default function Use_Context_Com() {
    let [name, set_name] = useState("Gaurav Gupta")

    return (
        <>
            <NameContext.Provider value={name}>
                <Com_A/>
                <Com_B name={name} />
            </NameContext.Provider>
        </>
    )
}

/*
ctrl + R = Rotate
name= "Gaurav"
use_contaxt - Com_A
            - Com_B
                - Com_B2
                - Com_B3
*/