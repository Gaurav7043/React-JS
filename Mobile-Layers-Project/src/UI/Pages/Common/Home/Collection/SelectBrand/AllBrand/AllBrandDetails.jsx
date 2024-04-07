import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import './AllBrand.css'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

export default function AllBrandDetails() {
    let location = useLocation()
    // console.log("data=====>", location)

    const { title, images, description, price, brand, discountPercentage } = location?.state || {}
    const productId = location?.state?._id
    const [reviews, setReviews] = useState([])

    // Load reviews for the specific product from local storage when component mounts
    useEffect(() => {
        const storedReviews = JSON.parse(localStorage.getItem(`reviews_${productId}`)) || []
        setReviews(storedReviews)
    }, [productId])

    // Update local storage whenever reviews change
    useEffect(() => {
        localStorage.setItem(`reviews_${productId}`, JSON.stringify(reviews))
    }, [reviews, productId]);

    // Add Review
    const addReview = (review) => {
        setReviews([...reviews, review])
    }

    // Delete Review
    const deleteReview = (index) => {
        const newReviews = [...reviews]
        newReviews.splice(index, 1)
        setReviews(newReviews)
    }

    return (
        <>
            <div className='d-flex gap-3 ms-5 ps-4 pt-3 pb-3 collection'>
                <NavLink to={"/"} className="text-decoration-none home" style={{ color: "black", opacity: "0.58" }}>Home</NavLink>
                <div style={{ opacity: "0.58" }}>/</div>
                <div>Collection</div>
                <div style={{ opacity: "0.58" }}>/</div>
                <div style={{ opacity: "0.58" }}>{brand}</div>
                <div style={{ opacity: "0.58" }}>/</div>
                <div style={{ opacity: "0.58" }}>{title}</div>
            </div>
            <div style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.08)", marginBottom: "30px" }}></div>

            <div className='d-flex border dark'>
                <div className="bxslider">
                    {
                        images?.map((image, index) => (
                            <img key={index} src={image} alt={`${title} - Image ${index + 1}`} />
                        ))
                    }
                </div>

                <div className='p-5' style={{ flex: "1" }}>
                    <p className='m-0'>{title}</p>
                    <h1 style={{ letterSpacing: "1px", fontFamily: "sans-serif" }}>{description}</h1>
                    <p style={{ fontSize: "23px" }}>₹ {price - discountPercentage}.00 MRP(inclusive of taxes): <span className='text-decoration-line-through' style={{ color: "gray" }}>₹ {price}.00</span></p>
                    <Button className='w-100 bg-black rounded-5 mt-4 mb-3'>Add To Cart</Button>
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
                        <ReviewForm style={{ flex: "1" }} addReview={addReview} />
                    </div>
                    <ReviewList reviews={reviews} deleteReview={deleteReview} />
                </div>
            </div>
        </>
    )
}
