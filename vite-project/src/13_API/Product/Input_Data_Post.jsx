import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Table, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import Select from 'react-select'

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
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'blue', label: 'Blue' },
    { value: 'black', label: 'Black' },
    { value: 'white', label: 'White' },
    { value: 'pink', label: 'Pink' },
]

let gender = ["male", "Female", "kid`s"]

let categoryOptions = [
    { value: "casual", label: "Casual" },
    { value: "highlength", label: "Highlength" },
    { value: "sports", label: "sports" },
    { value: "formal", label: "formal" },
    { value: "party-Wear", label: "party Wear" },
]

let sizeOptions = ["41", "42", "43", "44", "45"]

export default function Input_Data_Post() {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    let [product, setProduct] = useState(intialProduct)
    let [allProduct, setAllProduct] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:9999/product/getAll",
        }).then((res) => {
            // console.log("----->", res.data)
            setAllProduct(res?.data?.data)
        }).catch((err) => {
            toast.error(err)
        })
    }, [])

    let submitHandler = (e) => {
        e.preventDefault()
        console.log(product)
        axios({
            method: "post",
            url: "http://localhost:9999/product/create",
            data: product,
        }).then((res) => {
            // setAllProduct(res?.data?.data)
            toast.success("Data Added")
        }).catch((err) => {
            toast.error(err)
        })
    }

    const selectHandler = (e, type) => {
        if(type === "color"){
            let color = e.map((e) => e?.value)
            setProduct({...product, color: color})
        }else if(type === "category"){
            let category = e.map((e) => e?.value)
            setProduct({...product, category: category})
        }
    }

    const checkBoxHandler = (sizeValue) => {
        if (product.size.includes(sizeValue)) {
            setProduct({ ...product, size: product.size.filter((size) => size !== sizeValue) });
        } else {
            setProduct({ ...product, size: [...product.size, sizeValue] });
        }
    };

    return (
        <>
            <div className='d-flex align-items-center mb-4'>
                <div style={{ flex: "1", textAlign: "center" }}>
                    <h1 className='m-0'>Product</h1>
                </div>
                <div>
                    <Button color="danger" onClick={toggle}>Add Product</Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Product From</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={submitHandler} >
                                <FormGroup>
                                    <Label for="title">Title</Label>
                                    <Input value={product?.title} id="title" name="email" placeholder="Enter Tittle" type="text" onChange={(e) => setProduct({ ...product, title: e?.target?.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="description">Description</Label>
                                    <Input value={product?.description} id="description" name="email" placeholder="Enter Description" type="text" onChange={(e) => setProduct({ ...product, description: e?.target?.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="brand">Brand</Label>
                                    <Input value={product?.brand} id="brand" name="email" placeholder="Enter Brand" type="text" onChange={(e) => setProduct({ ...product, brand: e?.target?.value })} />
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <Label>Gender</Label>
                                    <div className="d-flex gap-3">
                                        {
                                            gender?.map((e, i) => {
                                                return (
                                                    <FormGroup className="d-flex" key={i}>
                                                        <Input value={product?.gender} type="radio" name="name" id='gender' onChange={() => setProduct({ ...product, gender: e })} />
                                                        <Label className='ps-2' for="gender">{e}</Label>
                                                    </FormGroup>
                                                );
                                            })
                                        }
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input value={product?.price} id="price" name="email" placeholder="Enter Price" type="number" onChange={(e) => setProduct({ ...product, price: e?.target?.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="discount">Discount</Label>
                                    <Input value={product?.discountPercentage} id='discount' type="text" onChange={(e) => setProduct({ ...product, discountPercentage: e?.target?.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="stock">Available Stock</Label>
                                    <Input value={product?.availableStock} id='stock' type="text" onChange={(e) => setProduct({ ...product, availableStock: e?.target?.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category">Category</Label>
                                    <Select id='category' isMulti options={categoryOptions} onChange={(e) => selectHandler(e, "category")} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="thumbnail">Thumbnail</Label>
                                    <Input value={product?.thumbnail} id='thumbnail' type="text" onChange={(e) => setProduct({ ...product, thumbnail: e?.target?.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Color</Label>
                                    <Select isMulti options={colorOptions} onChange={(e) => selectHandler(e, "color")} />
                                </FormGroup>
                                <Label>Size</Label>
                                <div className="d-flex">
                                    {
                                        sizeOptions?.map((size, index) => (
                                            <FormGroup key={index} className="d-flex gap-2 ps-3">
                                                <Input id='size' value={product?.size} type="checkbox" onChange={() => checkBoxHandler(size)} checked={product?.size?.includes(size)} />
                                                <Label for="size">{size}</Label>
                                            </FormGroup>
                                        ))
                                    }
                                </div>
                                <Button color='danger' className='w-100'>Submit</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            </div >

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
                        allProduct?.map((e, i) => {
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

/*
const obj = {
    gender: "male", // radio
    title: "Nike airJordan-440", // text
    description: "shose with comfort", // text
    price: 1999, // number
    discountPercentage: 70, // text
    availableStock: 10, // text
    brand: "nike", // text
    category: ["casual", "highlength"], // select
    thumbnail: "url", // text
    color: ["black", "white", "yellow", "green"], // select
    size: ["45", "44", "43", "42"], // checkbox
}
*/
/*
let [select, setSelect] = useState([])
const selectHandler = (e) => {
    // console.log("------>", e?.value)
    let color = e.map((e) => e?.value)
    // console.log(color)
    setSelect(color)
}
*/