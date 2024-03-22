import React from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'

export default function OffCanvas({ isOpen, toggleOffCanves }) {
    return (
        <>
            <div>
                <Offcanvas isOpen={isOpen} toggle={toggleOffCanves} direction='end' backdrop='static' style={{width: "100%"}}>
                    <marquee style={{backgroundColor:"#e7e7e7", height: "30px", color: "black"}}>
                        Great choice! Add 2 or more products for bundle discounts. No coupon required
                    </marquee>
                    <OffcanvasHeader toggle={toggleOffCanves} style={{fontWeight: "400", padding: "0px", height: "50px", margin: "auto", width: "92%", borderBottom: "2px solid #00000014"}}>Cart</OffcanvasHeader>
                    <OffcanvasBody style={{margin: "0px 36px"}}>
                        <strong>This is the Offcanvas body.</strong>
                    </OffcanvasBody>
                </Offcanvas>
            </div>
        </>
    )
}
