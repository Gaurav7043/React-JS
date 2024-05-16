import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

export default function ReviewForm({ addReview }) {
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')

    // Submit Handler
    const handlerSubmit = (e) => {
        e?.preventDefault()
        if (title && rating) {
            addReview({ title, rating, description })
            setTitle('')
            setRating(0)
            setDescription('')
        } else {
            alert('Title and Rating are required fields')
        }
    }

    // Reset Handler
    const handlerReset = () => {
        setTitle('')
        setRating(0)
        setDescription('')
    }

    // Rating Change Handler
    const handleRatingChange = (newRating) => {
        setRating(newRating)
    }

    // Generate star icons based on the current rating
    const renderStars = () => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={i <= rating ? solidStar : regularStar}
                    onClick={() => handleRatingChange(i)}
                    style={{ cursor: 'pointer', color: i <= rating ? 'gold' : 'grey' }}
                />
            )
        }
        return stars
    }

    return (
        <>
            <h2>Give Review</h2>
            <div className='w-25 ms-3 border-bottom border-black border-2 mb-4'></div>
            <Form onSubmit={handlerSubmit}>
                <FormGroup>
                    <Label>Title<span style={{ color: "red" }}>*</span></Label>
                    <Input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e?.target?.value)}
                        required
                        style={{ boxShadow: "none" }}
                    />
                </FormGroup>
                <FormGroup className='d-flex gap-4 align-items-center pb-3 pt-3'>
                    <Label className='m-0'>Rating<span style={{ color: 'red' }}>*</span></Label>
                    <div className='d-flex gap-3 align-items-center'>
                        {renderStars()}
                    </div>
                </FormGroup>
                {/* <FormGroup>
                    <Label>Rating<span style={{color: "red"}}>*</span></Label>
                    <Input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e?.target?.value)}
                        min="1"
                        max="5"
                        required
                        style={{ boxShadow: "none" }}
                    />
                </FormGroup> */}
                <FormGroup>
                    <Label>Description</Label>
                    <Input
                        type='textarea'
                        value={description}
                        onChange={(e) => setDescription(e?.target?.value)}
                        style={{ boxShadow: "none" }}
                    />
                </FormGroup>
                <div className='text-center'>
                    <Button color='success' className='me-4'>Submit</Button>
                    <Button color='warning' onClick={() => handlerReset()}>Reset</Button>
                </div>
            </Form>
        </>
    )
}