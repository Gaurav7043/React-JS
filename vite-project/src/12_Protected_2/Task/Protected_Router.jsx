import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// for super Admin
export const Supe_Admin = ({ Component })=> {
    const navigate = useNavigate()

    // check user is login or not
    useEffect(()=>{
        let jsonData = localStorage.getItem("login")
        let normalData = JSON.parse(jsonData)
        if(!normalData || normalData?.userType !== "superadmin"){
            toast.warn("Please do Login");
            navigate("/")
        }
    })

    return (
        <>  

            {Component}
        </>
    )
}

// for admin
export const Admin_Pro = ({ Component })=> {
    const navigate = useNavigate()

    // check user is login or not
    useEffect(()=>{
        let jsonData = localStorage.getItem("login")
        let normalData = JSON.parse(jsonData)
         if(!normalData || (normalData?.userType !== "admin" && normalData?.userType !== "superadmin") ){
            toast.warn("Please do Login");
            navigate("/")
        }
    })

    return (
        <>  

            {Component}
        </>
    )
}

// for employee
export const Employee_Pro = ({ Component })=> {
    const navigate = useNavigate()

    // check user is login or not
    useEffect(()=>{
        let jsonData = localStorage.getItem("login")
        let normalData = JSON.parse(jsonData)
         if(!normalData || (normalData?.userType !== "emp" && normalData?.userType !== "admin" && normalData?.userType !== "superadmin")){
            toast.warn("Please do Login");
            navigate("/")
        }
    })

    return (
        <>  

            {Component}
        </>
    )
}

// for user
export const User_Pro = ({ Component })=> {
    const navigate = useNavigate()

    // check user is login or not
    useEffect(()=>{
        let jsonData = localStorage.getItem("login")
        let normalData = JSON.parse(jsonData)
         if(!normalData || (normalData.userType !== "user" && normalData.userType !== "emp" && normalData?.userType !== "admin" && normalData?.userType !== "superadmin")){
            toast.warn("Please do Login");
            navigate("/")
        }
    })

    return (
        <>  

            {Component}
        </>
    )
}

// for profile
export const Profile_Pro = ({ Component })=> {
    const navigate = useNavigate()

    // check user is login or not
    useEffect(()=>{
        let jsonData = localStorage.getItem("login")
        let normalData = JSON.parse(jsonData)
         if(!normalData || (normalData.userType !== "profile" && normalData.userType !== "user" && normalData.userType !== "emp" && normalData?.userType !== "admin" && normalData?.userType !== "superadmin")){
            toast.warn("Please do Login");
            navigate("/")
        }
    })

    return (
        <>  

            {Component}
        </>
    )
}