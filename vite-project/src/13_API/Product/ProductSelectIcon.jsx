import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Select from 'react-select'
import { Table, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import { Bike, Bus, Car, Edit, Plane, Slash, Tractor, TramFront, Trash, Truck } from 'lucide-react'

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
    { value: "Green", label: "Green" },
    { value: "Yellow", label: "Yellow" },
    { value: "Blue", label: "Blue" },
    { value: "Black", label: "Black" },
    { value: "White", label: "White" },
    { value: "Pink", label: "Pink" },
    { value: "Orangered", label: "Orangered" },
    { value: "Car", label: "Car" },
    { value: "Bike", label: "Bike" },
    { value: "Bus", label: "Bus" },
    { value: "Train", label: "Train" },
    { value: "Plane", label: "Plane" },
    { value: "Truck", label: "Truck" },
    { value: "Tractor", label: "Tractor" },
    { value: "Cycle", label: "Cycle" },
]

const categoryOptions = [
    { value: "Casual", label: "Casual" },
    { value: "Sport", label: "Sport" },
    { value: "Fromal", label: "Fromal" },
    { value: "Party Wear", label: "Party Wear" },
]

const gender = ["male", "female", "kids"]
const sizeOptions = [41, 42, 43, 44, 45]

export default function ProductSelectIcon() {
    const [product, setProduct] = useState(intialProduct);
    const [allProduct, setAllProduct] = useState([]);
    const [modal, setModal] = useState(false);
    const [refetch, setRefetch] = useState(true)
    const refetchData = () => setRefetch(!refetch)
    const [updateMode, setUpdateMode] = useState(false)

    const toggle = () => {
        setModal(!modal)
        setUpdateMode(false)
        setProduct(intialProduct)
    }

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:9999/product/getAll",
        })?.then((res) => {
            console.log(res?.data)
            setAllProduct(res?.data?.data)
        })?.catch((err) => {
            toast.error(err)
        })
    }, [refetch])

    const submitHandler = (e) => {
        e?.preventDefault()
        console.log("---------->", product);
        axios({
            method: "post",
            url: "http://localhost:9999/product/create",
            data: product,
        })?.then((res) => {
            // console.log(res?.data)
            toast.success("Data Added")
            setProduct(intialProduct)
            toggle()
            refetchData()
        })?.catch((err) => {
            toast.error(err)
        })

    }

    const selectHandler = (e, type) => {
        if (type === "color") {
            let color = e?.map((e) => e?.value)
            setProduct({ ...product, color: color })
        } else if (type === "category") {
            let category = e?.map((e) => e?.value)
            setProduct({ ...product, category: category })
        }
    }

    const CustomColorOption = ({ innerProps, label, data }) => {
        return (
            <div {...innerProps} style={{ padding: "5px 10px", display: 'flex', alignItems: 'center', justifyContent: "space-between", borderBottom: "1px solid #dee2e6", background: "#dee9", cursor: "pointer" }}>
                {label}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ backgroundColor: data.value, width: '20px', height: '20px', borderRadius: '50%' }}>
                        {data.value === 'Car' && <Car />}
                        {data.value === 'Bike' && <Bike />}
                        {data.value === 'Bus' && <Bus />}
                        {data.value === 'Train' && <TramFront />}
                        {data.value === 'Plane' && <Plane />}
                        {data.value === 'Truck' && <Truck />}
                        {data.value === 'Tractor' && <Tractor />}
                        {data.value === 'Cycle' && <Bike />}
                    </div>
                </div>
            </div>
        )
    }

    const checkBoxHandler = (sizeValue) => {
        if (product?.size?.includes(sizeValue)) {
            setProduct({ ...product, size: product?.size?.filter((size) => size !== sizeValue) });
        } else {
            setProduct({ ...product, size: [...product?.size, sizeValue] });
        }
    }

    const deleteHandler = (id) => {
        // console.log("delete product id", id)
        axios({
            method: "delete",
            url: `http://localhost:9999/product/delete/${id}`,
        })?.then((res) => {
            toast.success("Product Delete...!")
            refetchData()
        })?.catch((err) => {
            toast.error(err)
        })
    }

    const editHandler = (data) => {
        // console.log("update product id", data)
        toggle()
        setProduct(data)
        setUpdateMode(true)
    }

    const updataData = () => {
        // console.log("======>", product?._id)
        axios({
            method: "put",
            url: `http://localhost:9999/product/update/${product?._id}`,
            data: product,
        })?.then((res) => {
            // console.log(res?.data)
            toast.success("Data Updata...!")
            setProduct(intialProduct)
            toggle()
            refetchData()
        })?.catch((err) => {
            toast.error(err)
        })
    }

    return (
        <>
            <div className='d-flex align-items-center mb-4'>
                <div style={{ flex: "1", textAlign: "center" }}>
                    <h1 className='m-0 ps-5 ms-5'>Product</h1>
                </div>

                <div>
                    <Button color="danger" onClick={toggle}>Add Product</Button>
                    <Modal isOpen={modal} toggle={toggle} backdrop='static'>
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
                                    <Label for="brand">Brand</Label>
                                    <Input value={product?.brand} id="brand" placeholder="Enter Brand" type="text" onChange={(e) => setProduct({ ...product, brand: e?.target?.value })} />
                                </FormGroup>
                                <Label>Gender</Label>
                                <div className='d-flex gap-3'>
                                    {
                                        gender?.map((e, i) => {
                                            return (
                                                <FormGroup key={i}>
                                                    <Input value={product?.gender} type='radio' id='gender' checked={product?.gender === e} onChange={() => setProduct({ ...product, gender: e })} />
                                                    <Label for="gender" className='ps-2'>{e}</Label>
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
                                    <Label for="category">Category</Label>
                                    <Select value={product?.category?.map((category) => ({ value: category, label: category }))} isMulti options={categoryOptions} id="category" placeholder="Select category" onChange={(e) => selectHandler(e, "category")} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="color">Color</Label>
                                    <Select value={product?.color?.map((color, i) => ({
                                        // value: color, label: color,
                                        value: color, label: (
                                            <div key={i} style={{ display: "flex", alignItems: "center" }}>
                                                <div style={{ height: "20px", width: "20px", borderRadius: "50%", background: color, marginRight: "5px" }}>
                                                    {color === 'Car' && <Car />}
                                                    {color === 'Bike' && <Bike />}
                                                    {color === 'Bus' && <Bus />}
                                                    {color === 'Train' && <TramFront />}
                                                    {color === 'Plane' && <Plane />}
                                                    {color === 'Truck' && <Truck />}
                                                    {color === 'Tractor' && <Tractor />}
                                                </div>
                                                {color?.charAt(0)?.toUpperCase() + color?.slice(1)}
                                            </div>
                                        )
                                    }))} isMulti options={colorOptions} id="color" placeholder="Select color" onChange={(e) => selectHandler(e, "color")} components={{ Option: CustomColorOption }} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="thumbnail">Image</Label>
                                    <Input value={product?.thumbnail} id="thumbnail" placeholder="Enter Image Link" type="text" onChange={(e) => setProduct({ ...product, thumbnail: e?.target?.value })} />
                                </FormGroup>
                                <Label>Size</Label>
                                <div className="d-flex">
                                    {
                                        ["41", "42", "43", "44", "45"]?.map((size, index) => (
                                            <FormGroup key={index} className="d-flex gap-2 ps-3">
                                                <Input id='size' value={product?.size} type="checkbox" onChange={() => checkBoxHandler(size)} checked={product?.size?.includes(size)} />
                                                <Label for="size">{size}</Label>
                                            </FormGroup>
                                        ))
                                    }
                                </div>
                                {
                                    updateMode ?
                                        <Button color='danger' className='w-100' onClick={() => updataData()}>Update</Button> :
                                        <Button color='danger' className='w-100'>Submit</Button>
                                }
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
            <Table striped className='text-center'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Final price</th>
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
                                    <td>{i + 1}</td>
                                    <td>
                                        <img src={e?.thumbnail} alt="" height="50px" />
                                    </td>
                                    <td style={{ width: "20%" }}>{e?.title}</td>
                                    <td>₹ {e?.price}</td>
                                    <td>{e?.discountPercentage || 0} %</td>
                                    <td style={{ width: "15%" }}> {e?.price - ((e?.price * e?.discountPercentage) / 100).toFixed(1) || "not discount"}</td>
                                    <td style={{ width: "0px" }}>
                                        <div className="d-flex gap-2 justify-content-center align-items-baseline">
                                            {
                                                e?.color?.map((color, i) => {
                                                    return (
                                                        <div key={i} style={{ height: "10px", width: "10px", borderRadius: "50%", background: color, marginRight: '10px' }}>
                                                            {color === 'Car' && <Car />}
                                                            {color === 'Bike' && <Bike />}
                                                            {color === 'Bus' && <Bus />}
                                                            {color === 'Train' && <TramFront />}
                                                            {color === 'Plane' && <Plane />}
                                                            {color === 'Truck' && <Truck />}
                                                            {color === 'Tractor' && <Tractor />}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex gap-1'>
                                            {
                                                sizeOptions?.map((size, i) => {
                                                    return (
                                                        <div key={i} style={{ border: "1px solid black", padding: "6px", color: e?.size?.find((e) => e == size) ? "black" : "gray" }}>{size}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <Edit role='button' color="#81adef" onClick={() => editHandler(e)} />
                                        <Slash style={{ rotate: "-21deg" }} />
                                        <Trash role='button' color="#f22b2b" onClick={() => deleteHandler(e?._id)} />
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