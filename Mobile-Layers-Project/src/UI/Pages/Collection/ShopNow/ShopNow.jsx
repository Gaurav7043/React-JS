import React from 'react'
import { NavLink } from 'react-router-dom'
import shopnow from '../../../../../public/shopnow-logo.webp'

export default function ShopNow() {
    return (
        <>
            <NavLink to={"/collection"} role='button'>
                <img src={shopnow} alt="" style={{height: "auto", maxWidth: "100%"}} />
            </NavLink>
        </>
    )
}
