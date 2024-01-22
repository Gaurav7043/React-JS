import React, { useEffect, useState } from 'react'
import { Button, Input, Label } from 'reactstrap';
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'; // Importing toast from react-toastify
import { Trash, Minus } from 'react-feather'; // Assuming Trash and Minus are icons from a library

export default function Done({ done, setDone, pending, setPending }) {
    let [remove, setRemove] = useState([]);
    let [searchDone, setSearchDone] = useState("");

    // done search data
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("done") || "[]");
        let filterData = data.filter((e) =>
            e.includes(searchDone.toLocaleLowerCase())
        );
        setDone(filterData);
    }, [searchDone])

    const deleteHandler = (index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
                let filter_data = done.filter((e, i) => i != index);
                setDone(filter_data);
                localStorage.setItem("done", JSON.stringify(filter_data));
                toast.info("Data Remove Successfully");
            }
        });
    };

    const removeSelectHandler = (index) => {
        let match = remove.includes(index);
        if (match) {
            setRemove(remove.filter((e) => e !== index));
        } else {
            setRemove([...remove, index]);
        }
    };

    const selectDoAllData = () => {
        if (remove.length !== done.length) {
            setRemove(done.map((e, index) => index));
        } else {
            setRemove([]);
        }
    };

    const removeHandler = () => {
        let notDone = [];
        let dTask = [];
        done.map((e, i) => {
            if (remove?.includes(i)) {
                notDone.push(e);
            } else {
                dTask.push(e);
            }
            setDone(dTask);
            setPending([...pending, ...notDone]);
            localStorage.setItem("done", JSON.stringify(dTask));
            localStorage.setItem("pending", JSON.stringify([...pending, ...notDone])
            );
            setRemove([]);
        })
    };

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
                setDone([]), 
                localStorage.removeItem("done")
                setPending([])
                localStorage.removeItem("pending")
            }
        });
    }

    return (
        <div>
            <div className="content m-auto" style={{ width: "700px", justifyContent: "center" }}>
                <div className="notebook-page">
                    {
                        done.length > 0 ?
                        <div>
                            <div className="d-flex w-100 justify-content-end align-items-center gap-2 p-2">
                                <Input className=" w-50" placeholder="search" value={searchDone} onChange={(e) => setSearchDone(e?.target.value)} style={{ boxShadow: "none" }} />
                            </div>
                            <div className="header">
                                <h1 className="text-center p-2" style={{ fontWeight: "bold", fontSize: "45px", padding: "10px", color: "#131355" }}>Done List</h1>
                            </div>
                            <div className="text-end m-3">
                                <div className="d-flex justify-content-end align-items-center">
                                    <Input type="checkbox" style={{ margin: "0px", boxShadow: "none", borderRadius: "50%", fontSize: "22px", border: "none", border: "1px solid gray" }} checked={done.length === remove.length} onChange={selectDoAllData} />
                                    <Label role="button" style={{ margin: "0px", fontWeight: "bold ", fontSize: "22px", paddingLeft: "10px" }}>Select All</Label>
                                    <Minus role="button" onClick={() => removeHandler()} />
                                </div>
                            </div>
                            <div>
                                {
                                    done.map((e, i) => {
                                        return (
                                            <div style={{ width: "100%" }} key={i}>
                                                <div className="border-bottom border-1 dark pb-2 w-100  gap-2" style={{ display: "flex", alignItems: "center" }}>
                                                    <div>
                                                        <h3 className="dud" style={{ paddingLeft: "45px" }}>{i + 1}.</h3>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                                        <h3>{e}</h3>
                                                        <div className="m-2 bd">
                                                            <Input type="checkbox" style={{ padding: "10px", borderRadius: "50px", marginRight: "2px", boxShadow: "none" }} checked={remove.includes(i)} onChange={() => removeSelectHandler(i)} />
                                                            <Trash role="button" color="red" onClick={() => deleteHandler(i)} />
                                                            {/* <Minus role="button" onClick={() => removeHandler(i)} /> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <div className="text-center mt-3">
                                {/* <Button onClick={removeHandler} color="danger">Submit</Button> */}  
                                <Button style={{ margin: "5px", backgroundColor: "green" }} onClick={deleteAllHandler}>All Delete</Button>
                            </div>
                        </div> :
                        (
                            <h1 className="text-center mt-3" style={{ color: '#131355', fontWeight: "bold" }}>Please Add Some Todo</h1>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
