import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BE_URL } from '../../../../../../../Config'
import { toast } from 'react-toastify'
import { NavLink, useParams } from 'react-router-dom'
import './AllBrand.css'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPinterest, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'

export default function AllBrandDetails() {
    let [productData, setProductData] = useState({})
    console.log("productData==============>", productData)
    const paramsData = useParams()
    console.log("========paramsData", paramsData)

    useEffect(() => {
        axios({
            method: "get",
            url: BE_URL + `/product/getProductById/${paramsData?.id}`,
        })?.then((res) => {
            // console.log(res?.data)
            setProductData(res?.data?.data)
        })?.catch((err) => {
            console.log(err)
            toast.error("Failed to load product details")
        })
    }, [])

    return (
        <>
            <div className='d-flex gap-3 ms-5 ps-4 pt-3 pb-3 collection'>
                <NavLink to={"/"} className="text-decoration-none home" style={{ color: "black", opacity: "0.58" }}>Home</NavLink>
                <div style={{ opacity: "0.58" }}>/</div>
                <div>Collection</div>
                <div style={{ opacity: "0.58" }}>/</div>
                <div style={{ opacity: "0.58" }}>{productData?.brand}</div>
                <div style={{ opacity: "0.58" }}>/</div>
                <div style={{ opacity: "0.58" }}>{productData?.title}</div>
            </div>
            <div style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.08)", marginBottom: "30px" }}></div>

            <div className='d-flex border dark'>
                {
                    // selectedImage && (
                    <img className="w-50" src={productData?.images} alt={`${productData?.title} - Selected Image`} />
                    // )
                }

                <div className='p-5' style={{ flex: "1" }}>
                    <p className='m-0'>{productData?.title}</p>
                    <h1 style={{ letterSpacing: "1px", fontFamily: "sans-serif" }}>{productData?.description}</h1>
                    <p style={{ fontSize: "23px" }}>₹ {productData?.price - productData?.discountPercentage}.00 MRP(inclusive of taxes): <span className='text-decoration-line-through' style={{ color: "gray" }}>₹ {productData?.price}.00</span></p>
                    <Button className='w-100 bg-black rounded-5 mt-4 mb-3'>Add To Cart</Button>
                    {/* Render images as thumbnails */}
                    <div className='d-flex'>
                        {
                            productData?.images?.map((image, index) => {
                                return (
                                    <div>
                                        <img key={index} role='button' className="mt-4 me-4 mb-5 rounded-circle" src={image} alt={`${productData?.title} -   Image ${index + 1}`} height="93px" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p style={{ fontSize: "20px", marginBottom: "0px" }}>share:
                            <a href='https://twitter.com/' target='_blank' style={{ color: "black", fontSize: "25px" }}>
                                <FontAwesomeIcon icon={faTwitter} className='ps-3 pe-3' role='button' />
                            </a>
                            <a href='https://www.facebook.com/' target='_blank' style={{ color: "black", fontSize: "25px" }}>
                                <FontAwesomeIcon icon={faSquareFacebook} className='pe-3' role='button' />
                            </a>
                            <a href='https://in.pinterest.com/' target='_blank' style={{ color: "black", fontSize: "25px" }}>
                                <FontAwesomeIcon icon={faPinterest} className='pe-3' role='button' />
                            </a>
                        </p>
                        <ReviewForm style={{ flex: "1" }} />
                    </div>

                    <ReviewList />
                </div>
            </div>
        </>
    )
}
