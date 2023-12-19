import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Error404 from './Error404'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Service from './Service/Service'
import Car_Service from './Service/Car_Service'
import Bike_Service from './Service/Bike_Service'
import Sports_Bike from './Service/Bike/Sports_Bike'
import Normal_Bike from './Service/Bike/Normal_Bike'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <div className='d-flex justify-content-center align-items-center' style={{width: "100vw", minHeight: "90vh", backgroundColor: "lightgray"}}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/service'>
                                <Route index Component={Service} />
                                <Route path='car' Component={Car_Service} />
                                <Route path='bike'>
                                    <Route index Component={Bike_Service} />
                                    <Route path='sports' element={<Sports_Bike/>} />
                                    <Route path='normal' element={<Normal_Bike/>} />
                                </Route>
                            </Route>
                            <Route path='*' element={<Error404 />} />
                        </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

/*
export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <div className='d-flex justify-content-center align-items-center' style={{width: "100vw", minHeight: "90vh", backgroundColor: "lightgray"}}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/service'>
                                <Route index Component={Service} />
                                <Route path='car' Component={Car_Service} />
                                <Route path='bike'>
                                    <Route index Component={Bike_Service} />
                                    <Route path='sports' element={<Sports_Bike/>} />
                                    <Route path='normal' element={<Normal_Bike/>} />
                                </Route>
                            </Route>
                            <Route path='*' element={<Error404 />} />
                        </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
*/