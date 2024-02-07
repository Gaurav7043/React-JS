import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Table } from 'reactstrap'
import { Edit, Slash, Trash } from 'lucide-react'

export default function Inputa_Data() {
    let [product, setProduct] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:9999/product/getAll"
        }).then((res) => {
            console.log("---->", res?.data?.data)
            setProduct(res?.data?.data)
        }).catch((err) => {
            toast.error(err)
        })
    }, [])

    return (
        <>
            <Table striped>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Final Price</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product?.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>
                                        <img src={e?.thumbnail} alt="" height="70px" width="70px" />
                                    </td>
                                    <td>{e?.title}</td>
                                    <td>₹ {e?.price}</td>
                                    <td>{e?.discountPercentage || 0} %</td>
                                    <td>{e?.price - ((e?.price * e?.discountPercentage) / 100).toFixed(1) || "Not Discount"}</td>
                                    <td>{e?.color}</td>
                                    <td>{e?.size}</td>
                                    <td>
                                        <Edit role='button' color='#81adef' />
                                        <Slash style={{rotate: "-21deg"}} />
                                        <Trash role='button' color='#f22b2b' />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
