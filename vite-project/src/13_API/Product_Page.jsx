import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function Product_Page() {
    let [data, setData] = useState({})

    useEffect(() => {
        (
            async () => {
                try{
                    const fetchData = await axios({
                        method: "get",
                        url: "https://fakestoreapi.com/products/1"
                    })
                    setData(fetchData?.data)
                }catch(error){
                    toast.error(error.message)
                }
            }
        )();
    }, [])

    return (
        <>
            <div className='d-flex align-items-center justify-content-center gap-3' style={{ width: "100vw" }}>
                <div className='w-25'>
                    {" "}
                    <img className='w-100' src={data?.image} alt="" />
                </div>
                <div className='w-75 d-flex align-items-center gap-3'>
                    <h1>Name :- </h1>
                    <span className='fs-3'>{data?.title}</span>
                </div>
            </div>
        </>
    )
}
