import React from 'react'
import { NavLink } from 'reactstrap'
import shopnow from '../../../../../public/shopnow-logo.webp'

export default function ShopNow() {
    return (
        <>
            <NavLink>
                <img src={shopnow} alt="" style={{height: "auto", maxWidth: "100%"}} />
            </NavLink>
        </>
    )
}
