import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import Header from '../UI/Component/Header/Header'
import Home from '../UI/Pages/Common/Home/Home'
import Footers from '../UI/Component/Footer/Footer'
import SignUp from '../UI/Pages/Auth/SignUp/SignUp'
import SignIn from '../UI/Pages/Auth/SignIn/SignIn'
import Profile from '../UI/Pages/Common/Profile/Profile'
import Product from '../UI/Pages/Admin/Product/Product'
import DashBoard from '../UI/Pages/Admin/DashBoard/DashBoard'
import User from '../UI/Pages/Admin/User/User'
import Order from '../UI/Pages/Admin/Order/Order'
import CommonProduct from '../UI/Pages/Common/Product/CommonProduct'

export default function Router() {
    return (
        <>
            <CookiesProvider defaultSetOptions={{ path: "/" }}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        {/* Common */}
                        <Route path='/' Component={Home} />
                        <Route path='/profile' Component={Profile} />
                        <Route path='/product/:type' element={<CommonProduct />} />

                        {/* Auth */}
                        <Route path='/signup' Component={SignUp} />
                        <Route path='/signin' Component={SignIn} />

                        {/* Admin */}
                        <Route path='/admin-dashboard' element={<DashBoard />} />
                        <Route path='/admin-product' element={<Product />} />
                        <Route path='/admin-user' element={<User />} />
                        <Route path='/admin-order' element={<Order />} />

                    </Routes>
                    <Footers />
                </BrowserRouter>
            </CookiesProvider>
        </>
    )
}
