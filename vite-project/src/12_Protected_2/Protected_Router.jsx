import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Protected_Router = ({ Componenet }) => {
    const navigate = useNavigate()

    // check user is login or not
    useEffect(()=>{
        let jsonData = localStorage.getItem("login")
        let normalData = JSON.parse(jsonData)
        if(!normalData){
            toast.warn("Please do Login");
            navigate("/")
        }
    })

    return (
        <>
            {Componenet}
        </>
    )
}

export const Admin_Protected = ({ Componenet }) => {
    const navigate = useNavigate()

    // check user is login or not
    useEffect(()=>{
        let jsonData = localStorage.getItem("login")
        let normalData = JSON.parse(jsonData)
        if(!normalData || normalData?.userType !== "admin"){
            toast.warn("You are not Admin");
            navigate("/")
        }
    })

    return (
        <>
            {Componenet}
        </>
    )
}