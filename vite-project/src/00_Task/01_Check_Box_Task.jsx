import "./checkBox.css"
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import { MinusSquare, Trash } from "lucide-react";
import Swal, { } from "sweetalert2"

export default function CheckBoxTask() {
    let [data, setData] = useState('');
    let [todoData, setTodoData] = useState([]);
    let [selectedTodoData, setSelectedTodoData] = useState([]);
    let [selectedGetData, setSelectedGetData] = useState([]);
    let [getData, setGetData] = useState([]);

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem("userdata")) || [];
        setTodoData(userData);
        let removeData = JSON.parse(localStorage.getItem("removedata")) || [];
        setGetData(removeData);
    }, []);

    const addData = (e) => {
        e?.preventDefault()
        if (data === "") {
            alert("please input data");
        } else {
            setTodoData([...todoData, data
            ]);
            localStorage.setItem("userdata", JSON.stringify([...todoData, data]));
            setData('');
        }
    };

    const checkedHandlerToDoData = (index) => {
        let match = selectedTodoData.includes(index);
        if (match) {
            setSelectedTodoData(selectedTodoData.filter((e) => e !== index));
        } else {
            setSelectedTodoData([...selectedTodoData, index]);
        }
    };

    const checkedHandlerGetData = (index) => {
        let match = selectedGetData.includes(index);
        if (match) {
            setSelectedGetData(selectedGetData.filter((e) => e !== index));
        } else {
            setSelectedGetData([...selectedGetData, index]);
        }
    };

    const checkAllTodoData = () => {

        if (selectedTodoData.length !== todoData.length) {
            setSelectedTodoData(todoData.map((e, index) => index));
        } else {
            setSelectedTodoData([]);
        }
    };

    const checkAllGetData = () => {
        if (selectedGetData.length !== getData.length) {
            setSelectedGetData(getData.map((e, index) => index));
        } else {
            setSelectedGetData([]);
        }
    };

    const submitHandler = () => {
        let notDone = []
        let done = []

        todoData.map((e, i) => {
            if (selectedTodoData?.includes(i)) {
                done.push(e);
            } else {
                notDone.push(e);
            }
        })
        setTodoData(notDone);
        setGetData([...getData, ...done]);
        localStorage.setItem("removedata", JSON.stringify([...getData, ...done]));
        localStorage.setItem("userdata", JSON.stringify(notDone));
        setSelectedTodoData([]);

    };

    const removeHandler = () => {
        let notDone = []
        let done = []

        getData.map((e, i) => {
            if (selectedGetData?.includes(i)) {
                notDone.push(e);
            } else {
                done.push(e);
            }
        })

        setGetData(done);
        setTodoData([...todoData, ...notDone]);
        localStorage.setItem("removedata", JSON.stringify(done));
        localStorage.setItem("userdata", JSON.stringify([...todoData, ...notDone]));
        setSelectedGetData([]);
    };

    const singleDeleteHandler = (index) => {
        let deleteData = getData.filter((e, i) => {
            return i !== index
        })
        setGetData(deleteData)
        setSelectedGetData([]);

        console.log("--------->", deleteData)
        localStorage.setItem("removedata", JSON.stringify(deleteData))
    }

    const deleteAllHandler = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
                setGetData([]),
                    localStorage.removeItem("removedata");
            }
        });
    }


    return (
        <>
            <div className='body'>
                <div className='pt-5'>
                    <Form onSubmit={addData}>
                        <div className='d-flex justify-content-center mb-3'>
                            <div className='w-50'>
                                <Input
                                    id="input"
                                    value={data}
                                    checkData='Todo'
                                    placeholder='Enter Data'
                                    type='text'
                                    onChange={(e) => setData(e?.target?.value)}
                                    style={{ height: "50px" }}
                                />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mb-4'>
                            <Button role='button' style={{ backgroundColor: "rgb(60 63 121)" }} className='w-50' id="submit">Add Data</Button>
                        </div>
                    </Form>
                </div>

                <div className='d-flex gap-5'>
                    <div style={{ flex: "1" }}>
                        <div className="notebook-page">
                            <div className='input' style={{ height: "100%" }}>
                                <div className='header'>
                                    <h1 className='text-center' style={{ fontWeight: "bold", fontSize: "45px", padding: "10px", color: "#131355" }}>Pending Task</h1>
                                </div>
                                <div className='p-3 d-flex flex-column justify-content-between'>
                                    <div>
                                        {
                                            todoData.length > 0 &&
                                            <div className='d-flex justify-content-end pb-2 gap-2'>
                                                <Input role='button' type='checkbox' style={{ boxShadow: "none", borderRadius: "50%", fontSize: "22px"}} onChange={checkAllTodoData} />
                                                <Label role='button' style={{ fontWeight: "bold ", fontSize: "22px" }}>Select All</Label>
                                            </div>
                                        }
                                        <ul style={{ listStyle: "none" }} >
                                            {
                                                todoData.map((e, i) => (
                                                    <div key={i} >
                                                        <li className='w-100 d-flex align-items-center justify-content-between  mt-0 mb-0' style={{ maxHeight: "10px" }}>
                                                            <div className='list'>
                                                                <span style={{ fontWeight: "bold", fontSize: "25px", paddingRight: "10px" }}>{i + 1}.</span>
                                                                <Label style={{ fontWeight: "bold", fontSize: "25px", paddingRight: "18px", paddingTop: "10px", marginLeft: "14px" }}>{e}</Label>
                                                            </div>
                                                            <div>
                                                                <Input
                                                                    onChange={() => checkedHandlerToDoData(i)}
                                                                    checked={selectedTodoData.includes(i)}
                                                                    type='checkbox'
                                                                    role='button'
                                                                    style={{ boxShadow: "none", borderRadius: "50%", fontSize: "22px" }}
                                                                />
                                                            </div>
                                                        </li>
                                                        <hr style={{ width: "100%" }} />
                                                    </div>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className=' d-flex justify-content-center gap-4 h-25' style={{ textAlign: "center", width: "100", height: "auto" }} >
                                        {
                                            todoData.length > 0 && 
                                            <Button color='danger' role='button' className='me-2' onClick={submitHandler}>Submit</Button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: "1" }}>
                        {
                            getData.length > 0 ?
                            <div className="notebook-page">
                                <div className='input' style={{ height: "100%" }}>
                                    <div className='header'>
                                        <h1 className='text-center' style={{ fontWeight: "bold", fontSize: "45px", padding: "10px", color: "#131355" }}>Done Task</h1>
                                    </div>
                                    <div className='p-3 d-flex flex-column justify-content-between'>
                                        <div>
                                            {
                                                getData.length > 0 && 
                                                <div className='d-flex justify-content-end align-items-center gap-2 pb-2 mb-3'>
                                                    <Input role='button' className="mt-0" type='checkbox' style={{ boxShadow: "none", borderRadius: "50%", fontSize: "22px" }} onChange={checkAllGetData} />
                                                    <Label role='button' className="mb-0" style={{ fontWeight: "bold ", fontSize: "22px" }}>Select All</Label>
                                                    <MinusSquare color="#ec0909" style={{ marginLeft: "10px" }} role='button' onClick={() => removeHandler()} />
                                                </div>
                                            }
                                            <ul style={{ listStyle: "none" }}>
                                                {
                                                    getData.map((e, i) => (
                                                        <div key={i}>
                                                            <li className='w-100 d-flex align-items-center justify-content-between mt-0 mb-0' style={{ maxHeight: "10px" }}>
                                                                <div>
                                                                    <span style={{ fontWeight: "bold", fontSize: "25px", paddingRight: "10px" }}>{i + 1}.</span>
                                                                    <Label style={{ fontWeight: "bold", fontSize: "25px", paddingRight: "18px", paddingTop: "10px", marginLeft: "14px" }}>{e}</Label>
                                                                </div>
                                                                <div className='d-flex align-items-center gap-3'>
                                                                    <Input
                                                                        onChange={() => checkedHandlerGetData(i)}
                                                                        checked={selectedGetData.includes(i)}
                                                                        type='checkbox'
                                                                        role='button'
                                                                        style={{ boxShadow: "none", borderRadius: "50%", fontSize: "22px" }}
                                                                    />
                                                                    <MinusSquare color="#ec0909" style={{ marginLeft: "10px" }} role='button' onClick={() => removeHandler(i)} />
                                                                    <Trash role='button' onClick={() => singleDeleteHandler(i)} color="#ec0909" />
                                                                </div>
                                                            </li>
                                                            <hr style={{ width: "100%" }} />
                                                        </div>
                                                    ))
                                                }
                                            </ul>
                                            {
                                                getData.length > 0 &&
                                                <div style={{ textAlign: "center", width: "100", height: "auto" }}>
                                                    <Button color='danger' onClick={deleteAllHandler} >Delete All</Button>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>:
                            (
                                <h1></h1>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}