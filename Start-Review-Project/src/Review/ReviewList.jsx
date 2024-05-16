import React from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

export default function ReviewList({ reviews, deleteReview }) {
    const renderStars = (rating) => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            stars.push(<FontAwesomeIcon icon={i <= rating ? solidStar : regularStar} className={i <= rating ? 'text-warning' : 'text-secondary'} />)
        }
        return stars
    }

    return (
        <>
            <h2>Reviews</h2>
            <div className='border-bottom border-black border-2 mb-4 ms-3' style={{ width: "15%" }}></div>
            <ul className="list-group">
                {
                    reviews?.map((review, index) => (
                        <li key={index} className="list-group-item">
                            <div>
                                <span className='fw-bold'>Title : </span>
                                {review?.title}
                            </div>
                            {
                                review?.description &&
                                <div>
                                    <span className='fw-bold'>Description : </span>
                                    {review?.description}
                                </div>
                            }
                            <div>
                                <span className='fw-bold'>Rating : </span>
                                {renderStars(review?.rating)}
                            </div>
                            <Button className="btn btn-danger btn-sm mt-2" onClick={() => deleteReview(index)}>
                                Delete
                            </Button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
