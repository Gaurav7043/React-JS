import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
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
    { value: 'Red', label: 'Red' },
    { value: 'Green', label: 'Green' },
    { value: 'Yellow', label: 'Yellow' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Black', label: 'Black' },
    { value: 'White', label: 'White' },
    { value: 'Pink', label: 'Pink' },
    { value: 'Orangered', label: 'Orangered' }
]

let gender = ["male", "female", "kids"]

let categoryOptions = [
    { value: "Casual", label: "Casual" },
    { value: "High Length", label: "High Length" },
    { value: "Sports", label: "Sports" },
    { value: "Formal", label: "Formal" },
    { value: "Party Wear", label: "Party Wear" },
]

let sizeOptions = ["41", "42", "43", "44", "45"]

export default function Productt() {
    const [modal, setModal] = useState(false);
    let [product, setProduct] = useState(intialProduct)
    let [allProduct, setAllProduct] = useState([])
    const [refetch, setRefetch] = useState(true);
    const [updateMode, setUpdateMode] = useState(false)
    const refetchData = () => setRefetch(!refetch);

    const toggle = () => {
        setModal(!modal)
        setUpdateMode(false)
        setProduct(intialProduct)
    }

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:9999/product/getAll",
        }).then((res) => {
            // console.log(res?.data?.data)
            setAllProduct(res?.data?.data)
        }).catch((err) => {
            toast.error(err)
        })
    }, [refetch])

    let submitHandler = (e) => {
        e?.preventDefault()
        console.log(product)
        if (product.title.length > 0 && product.description.length > 0 && product.brand.length > 0 && product.gender.length > 0 && product.price.length > 0 && product.discountPercentage.length > 0 && product.availableStock.length > 0 && product.category.length > 0 && product.thumbnail.length > 0 && product.color.length > 0 && product.size.length > 0) {
            axios({
                method: "post",
                url: "http://localhost:9999/product/create",
                data: product,
            }).then((res) => {
                // console.log("=====>", res?.data)
                // setAllProduct(res?.data?.data)
                toast.success("Data Added")
                setProduct(intialProduct)
                toggle()
                refetchData()
            }).catch((err) => {
                toast.error(err)
            })
        } else {
            toast.warn("Please Fill Data")
        }
    }

    const CustomColorOption = ({ innerProps, label, data }) => (
        <div {...innerProps} style={{ padding: "0px 10px", display: 'flex', alignItems: 'center', justifyContent: "space-between", borderBottom: "1px solid #dee2e6", background: "#dee9", cursor: "pointer" }}>
            {label}
            <div style={{ backgroundColor: data.value, width: '20px', height: '20px', marginRight: '8px', borderRadius: '50%' }}></div>
        </div>
    )


    const selectHandler = (e, type) => {
        if (type === "color") {
            let color = e?.map((e) => e?.value)
            setProduct({ ...product, color: color })
        } else if (type === "category") {
            let category = e?.map((e) => e?.value)
            setProduct({ ...product, category: category })
        }
    }

    const checkBoxHandler = (sizeValue) => {
        if (product?.size?.includes(sizeValue)) {
            setProduct({ ...product, size: product?.size?.filter((size) => size !== sizeValue) });
        } else {
            setProduct({ ...product, size: [...product?.size, sizeValue] });
        }
    };

    const deleteHandler = (id) => {
        // console.log("Delete Product id :-", id)
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

    const updateHandler = (data) => {
        // console.log("Update Product Data :-", allProduct?.find((e) => e === data))
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
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Product From</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={(e) => submitHandler(e)} autoComplete='off' >
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
                                                        <Input value={product?.gender} type="radio" name="name" id='gender' checked={product?.gender === e} onChange={() => setProduct({ ...product, gender: e })} />
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
                                {/* <FormGroup>
                                    <Label for="category">Category</Label>
                                    <Select value={product?.category?.map((category) => ({ value: category, label: category }))} id='category' isMulti options={categoryOptions} onChange={(e) => setProduct({ ...product, category: e.map((ele) => ele.value) })} />
                                </FormGroup> */}
                                <FormGroup>
                                    <Label for="category">Category</Label>
                                    <Select value={product?.category?.map((category) => ({ value: category, label: category }))} id='category' isMulti options={categoryOptions} onChange={(e) => selectHandler(e, "category")} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Color</Label>
                                    <Select value={product?.color?.map((color) => ({ value: color, label: color }))} isMulti options={colorOptions} onChange={(e) => selectHandler(e, "color")} components={{ Option: CustomColorOption }} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="thumbnail">Image</Label>
                                    <Input value={product?.thumbnail} id='thumbnail' type="text" onChange={(e) => setProduct({ ...product, thumbnail: e?.target?.value })} />
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

            <div className='pt-3 pb-3'>
                <div className="container">
                    <div className="grid_box">
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                            {
                                allProduct?.map((e, i) => {
                                    return (
                                        <div key={i} className='border-2 dark rounded-2 bg-white'>
                                            <div>
                                                <img src={e?.thumbnail} alt="" style={{ height: "300px", width: "100%", borderTopLeftRadius: "0.3rem", borderTopRightRadius: "0.3rem" }} />
                                            </div>
                                            <div className='pt-3 pb-3 ps-2 pe-2'>
                                                <div>
                                                    <span className='fw-bold'>Title :-</span> {e?.title}
                                                </div>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div>
                                                        <span className='fw-bold'>Brand :-</span> {e?.brand}
                                                    </div>
                                                    <div>
                                                        <span className='fw-bold'>Discount :-</span> {e?.discountPercentage || 0}
                                                    </div>

                                                </div>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div>
                                                        <span className='fw-bold'>Price :-</span> {e?.price}
                                                    </div>
                                                    <div>
                                                        <span className='fw-bold'>Available Stock :-</span> {e?.availableStock || "out of stock"}
                                                    </div>

                                                </div>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div>
                                                        <span className='fw-bold'>After Discount :- </span>
                                                        {
                                                            e?.price - ((e?.price * e?.discountPercentage) / 100).toFixed(0) || "not"
                                                        }
                                                    </div>
                                                    <div className='d-flex align-items-center gap-2'>
                                                        <span className='fw-bold'>Color :-</span>
                                                        <div className="d-flex gap-2 justify-content-center">
                                                            {
                                                                e?.color?.map((color, i) => {
                                                                    return (
                                                                        <div key={i} style={{ height: "10px", width: "10px", border: "1px solid black", borderRadius: "50%", background: color }}></div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div>
                                                        <span className='fw-bold'>Gender :-</span> {e?.gender}
                                                    </div>
                                                    <div className='d-flex'>
                                                        <span className='fw-bold'>Size :- </span>
                                                        {
                                                            sizeOptions?.map((size, i) => {
                                                                return (
                                                                    <div key={i} style={{ border: "1px solid black", padding: "6px", color: e?.size?.find((e) => e == size) ? "black" : "gray" }}>{size}</div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className='fw-bold'>Category :-</span> {`${e?.category}`}
                                                </div>
                                                <div className='text-center mt-3'>
                                                    <Button color='danger' className='me-5' onClick={() => deleteHandler(e?._id)}>Delete</Button>
                                                    <Button color='danger' onClick={() => updateHandler(e)}>Update</Button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
