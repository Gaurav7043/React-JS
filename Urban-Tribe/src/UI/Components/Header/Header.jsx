import React from 'react'
import { Input } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../../public/logo.avif'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
    const menuItem = [
        { label: "Track Order" },
        { label: "All Products" },
        { label: "Casual Backpacks" },
        { label: "Professional" },
        { label: "Travel" },
        { label: "Sports" },
        { label: "School Bags" },
        { label: "Corporate gifting" },
        { label: "Best Offer" },
        { label: "Lunch Bags" },
        { label: "Blogs" },
        { label: "Contact Us" },
    ]

    return (
        <>
            <p className='text-center py-2.5 text-sm m-0 text-white bg-red-600'>
                Get Rs 100 Off on Prepaid Orders | Free Shipping All Over India
            </p>
            <div style={{ background: "#f7f8fa", borderBottom: "1px solid #e9e7e7" }}>
                <ul className='flex gap-3 text-sm py-2 m-0 items-center'>
                    {
                        menuItem?.map((menuItem, index) => {
                            return (
                                <>
                                    <li key={index}>
                                        <NavLink className="text-decoration-none text-black hover:!text-[#d11e33]">{menuItem?.label}</NavLink>
                                    </li>
                                </>
                            )
                        })
                    }
                    <div>
                        <FontAwesomeIcon className='absolute z-10 text-gray-400' icon={faSearch} style={{ top: "58px", right: "205px", fontSize: "17px" }} />
                        <Input className='relative shadow-none border-none' placeholder='SEARCH PRODUCTS...' style={{ width: "205px", margin: "auto", padding: "4px 20px", border: "1px solid #dee2e6" }} />
                    </div>
                </ul>
            </div>
            <div className='flex items-center justify-between px-8 py-3'>
                <div>
                    <img src={logo} alt="" className='h-16' />
                </div>
                <div className='flex gap-6 items-center'>
                    <div>
                        <NavLink className="text-decoration-none text-red-500 hover:text-black"> Sign </NavLink>
                        <span className='text-gray-400'>or</span>
                        <NavLink className="text-decoration-none text-red-500 hover:text-black"> Register </NavLink>
                    </div>
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faHeart} className='text-2xl text-red-600 hover:text-black' />
                        <span style={{ fontSize: "14px", lineHeight: "15px", fontWeight: "400", marginLeft: "4px" }}>WISHLIST</span>
                    </div>
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faBagShopping} className='text-2xl text-red-600 hover:text-black' />
                        <span style={{ fontSize: "14px", lineHeight: "15px", fontWeight: "400", marginLeft: "10px" }}>MY CART</span>
                    </div>
                </div>
            </div>
            
        </>
    )
}
