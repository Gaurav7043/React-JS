import React, { useEffect, useState } from 'react'
import { Select } from "flowbite-react"
import allProductBg from '../../../../../public/allProductBg.webp'
import Card from '../../../Component/Card/Card'
import { Grid3x3GapFill, GridFill } from 'react-bootstrap-icons'
import { API } from '../../../Api/axiosConfig'

export default function CommonProduct() {
    let [gridCols, setGridCols] = useState("grid grid-cols-3")
    let [product, setProduct] = useState([])

    useEffect(() => {
        (async function getData() {
            try {
                let { data } = await API?.get("/product/getAll")
                setProduct(data?.data)
            } catch (error) {
                console.log("---------error--------->", error)
            }
        })()
    }, [])

    return (
        <>
            <img src={allProductBg} alt="" />
            <div className='container-fluid'>
                <h1 className='text-center text-2xl mt-5 m-0'>All Products</h1>
                <div className='flex justify-end items-center gap-2.5 pr-5 my-5 text-[#777777] [&_svg]:!cursor-pointer'>
                    <Select required>
                        <option>Better Price</option>
                        <option>Price: High to Low</option>
                        <option>Price: Low to High</option>
                        <option>Customer Rating</option>
                    </Select>
                    <GridFill className='hover:!text-[#191919]' onClick={() => setGridCols("grid grid-cols-2")} />
                    <Grid3x3GapFill className='hover:!text-[#191919]' onClick={() => setGridCols("grid grid-cols-3")} />
                    <div className='flex text-[#777777] hover:text-[#191919] text-[8px]' onClick={() => setGridCols("grid grid-cols-4")}>
                        <div>
                            <GridFill />
                            <GridFill />
                        </div>
                        <div>
                            <GridFill />
                            <GridFill />
                        </div>
                    </div>
                </div>
                <div className={gridCols}>
                    {
                        product?.map((item, index) => (
                            <Card key={index} data={item} />
                        ))
                    }
                </div>
                <div className='text-center mt-14'>
                    <div className='!border-2 !border-[#d11e33] py-2.5 rounded-md w-[20%] text-[#d11e33] m-auto'>No More Product</div>
                </div>
            </div>
        </>
    )
}
