import React from 'react'
import Select from 'react-select'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import { gender, colorOptions, categoryOptions } from '../../../../Utils/Constants'

export default function ProductForm({ modal, toggle, product, setProduct, updataData, submitHandler, selectHandler, checkBoxHandler, CustomColorOption, updateMode }) {
    return (
        <>
            <div>
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
                                <Select value={product?.category?.map((category) => ({ value: category, label: category }))} isMulti options={categoryOptions} id="category" placeholder="Select category" type="text" onChange={(e) => selectHandler(e, "category")} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="color">Color</Label>
                                <Select value={product.color?.map((color, i) => {
                                    return (
                                        {
                                            // value: color, label: color,
                                            value: color, label: (
                                                <div key={i} style={{ display: "flex", alignItems: "center" }}>
                                                    <div style={{ height: "20px", width: "20px", borderRadius: "50%", background: color, marginRight: "5px" }} />
                                                    {color?.charAt(0)?.toUpperCase() + color?.slice(1)}
                                                </div>
                                            )
                                        }

                                    )
                                })} isMulti options={colorOptions} id="color" placeholder="Select Color" onChange={(e) => selectHandler(e, "color")} components={{ Option: CustomColorOption }} />
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
        </>
    )
}
