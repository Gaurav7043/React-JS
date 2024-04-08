import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../UI/Components/Header/Header'
import Home from '../UI/Pages/Common/Home/Home'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Home/>
                {/* <Routes>
                    <Route Component={{Home}} />
                </Routes> */}
            </BrowserRouter>
        </>
    )
}
