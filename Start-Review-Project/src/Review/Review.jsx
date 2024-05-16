import React, { useEffect, useState } from 'react'
import ReviewForm from './ReviewForm'
import ReviewsList from './ReviewList'

export default function Review() {
    const [reviews, setReviews] = useState([])

    // Load reviews from local storage when component mounts
    useEffect(() => {
        const storedReviews = JSON.parse(localStorage.getItem('reviews'))
        if (storedReviews) {
            setReviews(storedReviews)
        }
    }, [])

    // Update local storage whenever reviews change
    useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(reviews))
    }, [reviews])

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
            <div className="container border dark rounded p-3 mt-3 mb-3">
                <h1 className='text-center'>Review Application</h1>
                <div className='m-auto border-bottom border-black border-2 mb-4' style={{ width: "31%" }}></div>
                <div className="row">
                    <div className="col">
                        <ReviewForm addReview={addReview} />
                    </div>
                    <div className="col" style={{ borderLeft: "1px solid #dee2e6" }}>
                        <ReviewsList reviews={reviews} deleteReview={deleteReview} />
                    </div>
                </div>
            </div>
        </>
    )
}