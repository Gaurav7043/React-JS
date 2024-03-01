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

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/mobileskin' Component={MobileSkin} />
                    <Route path='/forgotPassword' Component={ForgotPassword} />
                    <Route path='/signup' Component={SignUp} />
                    <Route path='/trackorder' element={<TrackOrder/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/tandc' Component={TermsAndCondition} />
                    <Route path='/privacy-policy' Component={PrivacyPolicy} />
                    <Route path='/refunds' Component={Refunds} />
                    <Route path='/faq' element={<FAQ/>} />
                    <Route path='*' Component={Error} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}
