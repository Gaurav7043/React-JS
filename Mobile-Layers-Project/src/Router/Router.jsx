import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../UI/Components/Header/Header'
import MobileSkin from '../UI/Pages/MobileSkin/MobileSkin'
import Home from '../UI/Pages/Home/Home'
import Login from '../UI/Pages/Account/Login/Login'
import ForgotPassword from '../UI/Pages/Account/Forgot/ForgotPassword'
import SignUp from '../UI/Pages/Account/SignUp/SignUp'
import TrackOrder from '../UI/Pages/TrackOrder/TrackOrder'
import Footer from '../UI/Components/Footer/Footer'
import Error from '../UI/Pages/Error/Error'
import About from '../UI/Pages/About/About'
import Contact from '../UI/Pages/Contact/Contact'
import TermsAndCondition from '../UI/Pages/TermsAndCondition/TermsAndCondition'
import PrivacyPolicy from '../UI/Pages/PrivacyPolicy/PrivacyPolicy'
import Refunds from '../UI/Pages/Refunds/Refunds'
import FAQ from '../UI/Pages/FAQ/FAQ'
import SelectBrand from '../UI/Pages/Collection/SelectBrand/SelectBrand'
import Collection from '../UI/Pages/Collection/Collection'
import LaptopCollect from '../UI/Pages/Collection/LaptopCollect'
import LayerCollection from '../UI/Pages/Collection/LayerCollection'
import { Provider } from 'react-redux'
import Store from '../Redux/App/Store'
import DashBoard from '../UI/Pages/Admin/DashBoard/DashBoard'
import Profile from '../UI/Pages/Profile/Profile'
import Product from '../UI/Pages/Admin/Product/Product'
import Order from '../UI/Pages/Admin/Order/Order'
import User from '../UI/Pages/Admin/User/User'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Provider store={Store}>
                    <Header />
                    <Routes>
                        {/* ==============User============ */}
                        <Route path='/' Component={Home} />
                        <Route path='/mobileskin' Component={MobileSkin} />
                        <Route path='/forgotPassword' Component={ForgotPassword} />
                        <Route path='/trackorder' element={<TrackOrder />} />
                        <Route path='/brand' element={<SelectBrand />} />
                        <Route path="/about" element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/tandc' Component={TermsAndCondition} />
                        <Route path='/privacy-policy' Component={PrivacyPolicy} />
                        <Route path='/refunds' Component={Refunds} />
                        <Route path='/faq' element={<FAQ />} />
                        <Route path='/collection' Component={Collection} />
                        <Route path='/collect' Component={LaptopCollect} />
                        <Route path='/layercollect' Component={LayerCollection} />

                        {/* ==============Common============ */}
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' Component={SignUp} />
                        <Route path='/profile' Component={Profile} />
                        <Route path='/admin-product' Component={Product} />
                        <Route path='/order' Component={Order} />
                        <Route path='/user' Component={User} />

                        {/* ==============Admin============ */}
                        <Route path='/dashboard' Component={DashBoard} />

                        {/* ==============Error============ */}
                        <Route path='*' Component={Error} />
                    </Routes>
                    <Footer />
                </Provider>
            </BrowserRouter>
        </>
    )
}
