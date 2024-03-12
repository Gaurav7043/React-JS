import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from 'reactstrap'
import ProductFullDetails from './ProductFullDetails'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'
import { intialProduct } from '../../../../Utils/intialState'

export default function Product() {
    const [product, setProduct] = useState(intialProduct)
    const [allProduct, setAllProduct] = useState([])
    const [modal, setModal] = useState(false)
    const [refetch, setRefetch] = useState(true)
    const refetchData = () => setRefetch(!refetch)
    const [updateMode, setUpdateMode] = useState(false)
    const [detailModal, setDetailModal] = useState(false)
    const [selectedProductDetails, setSelectedProductDetails] = useState(null)

    // TOGGLE HANDLER
    const toggle = () => {
        setModal(!modal)
        setUpdateMode(false)
        setProduct(intialProduct)
    }

    // USEEFFECT HANDLER
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

    // SUBMIT HANDLER
    const submitHandler = (e) => {
        e?.preventDefault()
        console.log("---------->", product)
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

    // SELECT HANDLER
    const selectHandler = (e, type) => {
        if (type === "color") {
            let color = e?.map((e) => e?.value)
            setProduct({ ...product, color: color })
        } else if (type === "category") {
            let category = e?.map((e) => e?.value)
            setProduct({ ...product, category: category })
        }
    }

    // CUSTOM COLOR OPTION HANDLER
    const CustomColorOption = ({ innerProps, label, data }) => {
        return (
            <div {...innerProps} style={{ padding: "0px 10px", display: 'flex', alignItems: 'center', justifyContent: "space-between", borderBottom: "1px solid #dee2e6", background: "#dee9", cursor: "pointer" }}>
                {label}
                <div style={{ backgroundColor: data.value, width: '20px', height: '20px', marginRight: '8px', borderRadius: '50%' }}></div>
            </div>
        )
    }

    // CHECK BOX HANDLER
    const checkBoxHandler = (sizeValue) => {
        if (product?.size?.includes(sizeValue)) {
            setProduct({ ...product, size: product?.size?.filter((size) => size !== sizeValue) })
        } else {
            setProduct({ ...product, size: [...product?.size, sizeValue] })
        }
    }

    // DELETE HANDLER
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

    // EDIT HANDLER
    const editHandler = (data) => {
        // console.log("update product id", data)
        toggle()
        setProduct(data)
        setUpdateMode(true)
    }

    // UPDATE HANDLER
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

    // PREVIEW HANDLER
    const previewHandler = (id) => {
        axios({
            method: "get",
            url: `http://localhost:9999/product/getProductById/${id}`,
            data: product,
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
            <div className='d-flex align-items-center mb-4'>
                <div style={{ flex: "1", textAlign: "center" }}>
                    <h1 className='m-0 ps-5 ms-5'>Product</h1>
                </div>

                <div>
                    <Button color="danger" onClick={toggle}>Add Product</Button>
                </div>
            </div>

            <ProductForm product={product} submitHandler={submitHandler} selectHandler={selectHandler} CustomColorOption={CustomColorOption} checkBoxHandler={checkBoxHandler} updataData={updataData} toggle={toggle} modal={modal} updateMode={updateMode} setProduct={setProduct} />
            
            <ProductTable allProduct={allProduct} editHandler={editHandler} deleteHandler={deleteHandler} previewHandler={previewHandler} />

            <ProductFullDetails isOpen={detailModal} toggle={() => setDetailModal(false)} productDetails={selectedProductDetails} />
        </>
    )
}