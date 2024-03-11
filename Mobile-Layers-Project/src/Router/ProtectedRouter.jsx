import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRouter({ Component }) {
    const navigate = useNavigate()
    const data = useSelector((state) => state.authSlice)

    useEffect(() => {
        if (!data || data?.user?.userType !== "profile") {
            navigate("/login")
        }
    })

    return (
        <div>
            {Component}
        </div>
    )
}
