import { Edit, Eye, Slash, Trash } from 'lucide-react'
import React from 'react'
import { Table } from 'reactstrap'

export default function ProductTable({ allProduct, editHandler, deleteHandler, previewHandler }) {
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
