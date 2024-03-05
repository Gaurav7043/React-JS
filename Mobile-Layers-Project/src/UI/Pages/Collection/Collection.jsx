import React from 'react'
import { NavLink } from 'react-router-dom'
import apple from '../../../../public/iPhone-logo.webp'
import samsung from '../../../../public/Samsung-logo.webp'
import onepuls from '../../../../public/OnePlus-logo.webp'
import google from '../../../../public/google-logo.webp'
import realme from '../../../../public/realme-logo.webp'
import xiaomi from '../../../../public/Xiaomi-logo.webp'
import oppo from '../../../../public/Oppo-logo.webp'
import nothing from '../../../../public/Nothing_logo.webp'
import iqoo from '../../../../public/iqoo-logo.webp'
import poco from '../../../../public/Poco-logo.webp'
import vivo from '../../../../public/Vivo-logo.webp'
import asus from '../../../../public/Asus-logo.webp'
import "./Collection.css"

export default function Collection() {
    let brandData = [
        {
            brandImg: apple,
            brandText: "Select your Device",
        },
        {
            brandImg: samsung,
            brandText: "Select your Device",
        },
        {
            brandImg: onepuls,
            brandText: "Select your Device",
        },
        {
            brandImg: nothing,
            brandText: "Select your Device",
        },
        {
            brandImg: google,
            brandText: "Select your Device",
        },
        {
            brandImg: xiaomi,
            brandText: "Select your Device",
        },
        {
            brandImg: iqoo,
            brandText: "Select your Device",
        },
        {
            brandImg: poco,
            brandText: "Select your Device",
        },
        {
            brandImg: realme,
            brandText: "Select your Device",
        },
        {
            brandImg: oppo,
            brandText: "Select your Device",
        },
        {
            brandImg: vivo,
            brandText: "Select your Device",
        },
        {
            brandImg: asus,
            brandText: "Select your Device",
        }
    ]

    return (
        <>
            <div className='d-flex gap-3 ms-5 ps-4 pt-3 pb-3 collection'>
                <NavLink to={"/"} className="text-decoration-none home" style={{ color: "black", opacity: "0.58" }}>Home</NavLink>
                <div style={{ opacity: "0.58" }}>/</div>
                <div>Collection</div>
            </div>
            <div className=' border-top dark'>
                <h1 className='text-center mt-3 mb-3' style={{ fontWeight: "400" }}>Select Your Brand</h1>
                <div className="d-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
                    {
                        brandData?.map((e, i) => {
                            return (
                                <div key={i} className='collect  border border-2 border-black'>
                                    <NavLink>
                                        <div className='collect_image' style={{ width: "250px", height: "250px", margin: "auto" }}>
                                            <img src={e?.brandImg} alt="" className='img-fluid' style={{ width: "250px", width: "250px" }} />
                                            <span className='collect_hover'>{e?.brandText}</span>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
