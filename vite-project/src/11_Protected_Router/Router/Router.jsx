import React from 'react'
import Home from '../UI/Pages/Home'
import Error404 from '../UI/Pages/Error404'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header_RS from '../UI/Component/Header_RS'
import User from '../UI/Pages/User'

export default function Protected_Router() {
    return (
        <>
            <BrowserRouter>
                <Header_RS expand="lg" />
                <div className='d-flex justify-content-center align-items-center' style={{width: "100vw", minHeight: "89vh", backgroundColor: "lightgray"}}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/user' element={<User />} />
                            <Route path='/error' element={<Error404 />} />
                        </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
