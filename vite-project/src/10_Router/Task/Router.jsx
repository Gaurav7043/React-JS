import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Data from './Data'
import Age from './Age'
import Full_Information from './Full_Information'
import Name from './Name'

export default function Routerr() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Data/>}/>
                    <Route path='/name/:name' Component={Name} />
                    <Route path='/age/:age' element={<Age/>}/>
                    <Route path='/info/:name/:age' Component={Full_Information} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
