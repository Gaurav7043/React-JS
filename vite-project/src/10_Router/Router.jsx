import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Error404 from './Error404'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './Header'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <div className='d-flex justify-content-center align-items-center' style={{width: "100vw", minHeight: "100vh", backgroundColor: "lightgray"}}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='*' element={<Error404 />} />
                        </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
