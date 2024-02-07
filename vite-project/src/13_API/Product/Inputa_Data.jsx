import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select'
import { toast } from 'react-toastify'
import { Table, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import { Edit, Slash, Trash } from 'lucide-react'

const intialProduct = {
    title: "", // text
    description: "", // text
    brand: "", // text
    gender: "", // radio
    price: "", // number
    discountPercentage: "", // text
    availableStock: "", // text
    category: [], // select
    thumbnail: "", // text
    color: [], // select
    size: [], // checkbox
}

const colorOptions = [
    { value: "Red", label: "Red" },
    { value: "Yellow", label: "Yellow" },
    { value: "black", label: "black" },
    { value: "White", label: "White" },
    { value: "Pink", label: "Pink" },
    { value: "orangered", label: "orangered" },
    { value: "Blue", label: "Blue" },
    { value: "Green", label: "Green" },
]

const categoryOptions = [
    { value: "Casual", label: "Casual" },
    { value: "Sport", label: "Sport" },
    { value: "Fromal", label: "Fromal" },
    { value: "Party Wear", label: "Party Wear" },
]

const gender = ["male", "female", "kids"]
const sizeOption = [41, 42, 43, 44, 45]

export default function Inputa_Data() {
    let [product, setProduct] = useState(intialProduct)
    let [allProduct, setAllProduct] = useState([])
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:9999/product/getAll"
        }).then((res) => {
            console.log("---->", res?.data?.data)
            setAllProduct(res?.data?.data)
        }).catch((err) => {
            toast.error(err)
        })
    }, [])

    const selectHandler = (e, type) => {
        if (type === "color") {
            let color = e?.map((e) => e?.value)
            setProduct({ ...product, color: color })
        } else if (type === "category") {
            let category = e?.map((e) => e?.value)
            setProduct({ ...product, category: category })
        }
    }

    return (
        <>
            <div className='d-flex justify-content-between align-items-center mt-2 mb-4'>
                <div className='text-center' style={{ flex: "1" }}>
                    <h1 className='m-0 ps-5 ms-5'>Product</h1>
                </div>
                <div>
                    <Button color="danger" onClick={toggle}>Add Product</Button>
                    <Modal isOpen={modal} toggle={toggle} backdrop="static">
                        <ModalHeader toggle={toggle}>Product From</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={(e) => submitHandler(e)} autoComplete='off'>
                                <FormGroup>
                                    <Label for="title">Title</Label>
                                    <Input value={product?.title} id="title" placeholder="Enter Title" type="text" onChange={(e) => setProduct({ ...product, title: e?.target?.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="description">Description</Label>
                                    <Input value={product?.description} id="description" placeholder="Enter Description" type="text" onChange={(e) => setProduct({ ...product, description: e?.target?.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="title">Brand</Label>
                                    <Input value={product?.brand} id="title" placeholder="Enter Brand" type="text" onChange={(e) => setProduct({ ...product, brand: e?.target?.value })} />
                                </FormGroup>
                                <Label>Gender</Label>
                                <div className='d-flex gap-3'>
                                    {
                                        gender?.map((e, i) => {
                                            return (
                                                <FormGroup key={i}>
                                                    <Input value={product?.gender} type="radio" id='gender' checked={product?.gender === e} onChange={() => setProduct({ ...product, gender: e })} />
                                                    <Label className='ps-2'>{e}</Label>
                                                </FormGroup>
                                            )
                                        })
                                    }
                                </div>
                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input value={product?.price} id="price" placeholder="Enter Price" type="number" onChange={(e) => setProduct({ ...product, price: e?.target?.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="discount">Discount</Label>
                                    <Input value={product?.discountPercentage} id="discount" placeholder="Enter Discount" type="text" onChange={(e) => setProduct({ ...product, discountPercentage: e?.target?.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="stock">Available Stock</Label>
                                    <Input value={product?.availableStock} id="stock" placeholder="Enter Available Stock" type="text" onChange={(e) => setProduct({ ...product, availableStock: e?.target?.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="thumbnail">Thumbnail</Label>
                                    <Input value={product?.thumbnail} id="thumbnail" placeholder="Enter Image Link" type="text" onChange={(e) => setProduct({ ...product, thumbnail: e?.target?.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category">Category</Label>
                                    <Select value={product?.category?.map((category) => ({ value: category, label: category }))} placeholder="Select Category" options={categoryOptions} isMulti id='category' onChange={(e) => selectHandler(e, "category")} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="color">Color</Label>
                                    <Select value={product?.color?.map((color) => ({ value: color, label: color }))} id='color' isMulti placeholder="Select Color" options={colorOptions} onChange={(e) => selectHandler(e, "color")} />
                                </FormGroup>
                                <FormGroup>

                                </FormGroup>
                                <Button color='danger' className='w-100'>Submit</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            </div>

            <Table striped className='text-center'>
                <thead className='text-center'>
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
                        allProduct?.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>
                                        <img src={e?.thumbnail} alt="" height="70px" width="70px" />
                                    </td>
                                    <td style={{ width: "25%" }}>{e?.title}</td>
                                    <td>₹ {e?.price}</td>
                                    <td>{e?.discountPercentage || 0} %</td>
                                    <td>{e?.price - ((e?.price * e?.discountPercentage) / 100).toFixed(1) || "Not Discount"}</td>
                                    <td>
                                        <div className='d-flex justify-content-center gap-2'>
                                            {
                                                e?.color?.map((color, i) => {
                                                    return (
                                                        <div key={i} style={{ height: "10px", width: "10px", backgroundColor: color, borderRadius: "50%" }}></div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex justify-content-center gap-2'>
                                            {
                                                sizeOption?.map((size, i) => {
                                                    return (
                                                        <div key={i} style={{ border: "1px solid black", padding: "4px", color: e?.size?.find((e) => e == size) ? "black" : "gray" }}>{size}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <Edit role='button' color='#81adef' />
                                        <Slash style={{ rotate: "-21deg" }} />
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
