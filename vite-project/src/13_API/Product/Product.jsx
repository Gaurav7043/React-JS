import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Table } from 'reactstrap'

export default function Product() {
    let [product, setProduct] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:9999/product/getAll",
        }).then((res) => {
            console.log("----->", res.data.data)
            setProduct(res?.data?.data)
        }).catch((err) => {
            toast.error(err)
        })
    }, [])

    return (
        <>
            <h1 className='text-center'>Product</h1>
            <Table striped className='text-center'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Size</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product?.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <img src={e?.thumbnail} alt="" height="50px" />
                                    </td>
                                    <td>{e?.title}</td>
                                    <td>₹ {e?.price}</td>
                                    <td>
                                        <div className="d-flex gap-2 justify-content-center">
                                            {
                                                e?.color?.map((color, i) => {
                                                    return (
                                                        <div key={i} style={{ height: "10px", width: "10px", border: "1px solid black", borderRadius: "50%", background: color }}></div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>
                                    <td>{e?.size}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}