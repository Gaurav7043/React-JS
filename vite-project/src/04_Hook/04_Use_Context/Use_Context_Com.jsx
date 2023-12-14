import React, { createContext, useState } from 'react'
import Com_A from './Com_A'
import Com_B from './Com_B'

export const NameContext = createContext()
export const AgeContext = createContext()

export default function Use_Context_Com() {
    let [name, set_name] = useState("Gaurav Gupta")
    let [age, setAge] = useState(23)

    return (
        <>
            <NameContext.Provider value={name}>
                <Com_B name={name} />
                <AgeContext.Provider value={{age: age}}>
                    <Com_A/>
                </AgeContext.Provider>
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