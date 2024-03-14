import axios from 'axios'
import { Edit, Eye, Slash, Trash } from 'lucide-react'
import React from 'react'
import { toast } from 'react-toastify'
import { Table } from 'reactstrap'
import { BE_URL } from '../../../../Config'

export default function ProductTable({ setProduct, allProduct, refetchData, toggle, setUpdateMode, setSelectedProductDetails, setDetailModal }) {

    // DELETE HANDLER
    const deleteHandler = (id) => {
        // console.log("delete product id", id)
        axios({
            method: "delete",
            url: BE_URL+`/product/delete/${id}`,
        })?.then((res) => {
            toast.success("Product Delete...!")
            refetchData()
        })?.catch((err) => {
            toast.error(err)
        })
    }

    // EDIT HANDLER
    const editHandler = (data) => {
        // console.log("update product id", data)
        toggle()
        setProduct(data)
        setUpdateMode(true)
    }

    // PREVIEW HANDLER
    const previewHandler = (id) => {
        axios({
            method: "get",
            url: BE_URL+`/product/getProductById/${id}`,
        })?.then((res) => {
            // console.log(res?.data?.data)
            setSelectedProductDetails(res?.data?.data)
            setDetailModal(true)
        })?.catch((err) => {
            toast.error(err)
        })
    }

    return (
        <>
            <Table striped className='text-center'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProduct?.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <img src={e?.thumbnail} alt="" height="50px" />
                                    </td>
                                    <td>{e?.title}</td>
                                    <td>{e?.brand}</td>
                                    <td>₹ {e?.price}</td>
                                    <td>
                                        <Edit role='button' color="#81adef" onClick={() => editHandler(e)} />
                                        <Slash style={{ rotate: "-21deg" }} />
                                        <Trash role='button' color="#f22b2b" onClick={() => deleteHandler(e?._id)} />
                                        <Slash style={{ rotate: "-21deg" }} />
                                        <Eye role='button' color='#81adee' onClick={() => previewHandler(e?._id)} />
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
