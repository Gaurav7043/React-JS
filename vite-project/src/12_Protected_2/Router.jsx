import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import Error404 from './Error404'
import {Admin_Protected, Protected_Router} from './Protected_Router'
import Profile from './Profile'
import Admin from './Admin'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <div className='d-flex justify-content-center align-items-center' style={{width: "100vw", minHeight: "89vh", backgroundColor: "lightgray"}}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/contact' element={<Protected_Router Componenet={<Contact />} />} />
                            <Route path='/profile' element={<Protected_Router Componenet={<Profile />} />} />
                            <Route path='/admin' element={<Admin_Protected Componenet={<Admin />}/>} />
                            <Route path='*' element={<Error404 />} />
                        </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
