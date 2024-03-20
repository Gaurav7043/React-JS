import React from 'react'
import { Button } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loginApi } from '../../Redux/Fetures/User'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function User() {
    let [data, setData] = useState({})
    let [input, setInput] = useState({
        email: "admin@admin.com",
        password: "123456",
    })
    const dispatch = useDispatch()
    const userSlice = useSelector((state) => state.userSlice)

    useEffect(() => {
        if (userSlice.error) toast.error(userSlice.error)
        // console.log("===userSlice=====>", userSlice)
        setData(userSlice.user)
    }, [userSlice])

    return (
        <>
            {
                userSlice.pending ?
                    <h1>Loading....!</h1> :
                    <div className='text-center'>
                        <hr className='mt-3' style={{ width: "25%", margin: "auto" }} />
                        <h1>Email : {data.email}</h1>
                        <Button color='danger' onClick={() => dispatch(loginApi(input))}>Call API</Button>
                    </div>
            }
        </>
    )
}
