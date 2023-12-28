import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Profile from './Profile'
import Error from './Error'
import Admin from './Admin'
import Super_Admin from './Super_Admin'
import Header from './Header'
import Employee from './Employee'
import { Admin_Pro, Employee_Pro, Profile_Pro, Supe_Admin, User_Pro } from './Protected_Router'
import User from './User'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <div className='d-flex justify-content-center align-items-center' style={{width: "100vw", minHeight: "89vh", backgroundColor: "lightgray"}}>
                    <Routes>
                        <Route path='/' Component={Home} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/profile' element={<Profile_Pro Component={<Profile />}/>} />
                        <Route path='/user' element={<User_Pro Component={<User />}/>} />
                        <Route path='/emp' element={<Employee_Pro Component={<Employee/>}/>} />
                        <Route path='/admin' element={<Admin_Pro Component={<Admin />}/>} />
                        <Route path='/supadmin' element={<Supe_Admin Component={<Super_Admin/>} />} />
                        <Route path='*' Component={Error} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
