import React, { useEffect, useState } from 'react'
import { Button, Table } from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Simple_API() {
    let [data, setData] = useState([])

    // button click me
    const fetchData = () => {
        axios({
            method: "get",
            url: "https://fakestoreapi.com/products",
        }).then((res) => {
            // console.log("==res==>", res.data)
            setData(res.data)
        }).catch((err) => {
            toast.error(err.message)
        })
    }

    useEffect(() => {
        axios({
            method: "get",
            url: "https://fakestoreapi.com/products",
        }).then((res) => {
            // console.log("==res==>", res.data)
            setData(res.data)
        }).catch((err) => {
            toast.error(err.message)
        })
    }, [])

    return (
        <>
            <div className='text-center'>
                <h1>Simple API</h1>
                <Button color="danger" className='mb-4' onClick={() => fetchData()}>Call API</Button>
            </div>

            <Table striped>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td><img src={e.image} alt="" style={{ maxWidth: "50px" }} /></td>
                                    <td>{e.title}</td>
                                    <td>{e.price}</td>
                                    <td>{e.rating.rate}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table >
        </>
    )
}
