import React, { useEffect, useState } from 'react'
import { Button, Input, Label } from 'reactstrap'
import Swal from 'sweetalert2'

export default function Pending({ pending, setPending, done, setDone }) {
    let [select, setSelect] = useState([])
    let [searchPending, setSearchPending] = useState("")

    useEffect(() => {
        setPending(JSON.parse(localStorage.getItem("pending") || "[]"))
    }, [])

    // pending search data
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("pending") || "[]")
        let fliterData = data.filter((e) => e.toLowerCase().includes(searchPending.toLowerCase()))
        setPending(fliterData)
    }, [searchPending])

    const checkHAndler = (index) => {
        let match = select.includes(index);
        if (match) {
            setSelect(select.filter((e) => e !== index));
        } else {
            setSelect([...select, index]);
        }
    };

    const selectPeAllData = () => {
        if (select.length !== pending.length) {
            setSelect(pending.map((e, index) => index));
        } else {
            setSelect([]);
        }
    };

    const submitHandler = () => {
        let notDone = [];
        let doneTask = [];
        pending.map((e, i) => {
            if (select?.includes(i)) {
                done.push(e);
            } else {
                notDone.push(e);
            }
            setPending(notDone);
            setDone([...done, ...doneTask]);
            localStorage.setItem("done", JSON.stringify([...done, ...doneTask]));
            localStorage.setItem("pending", JSON.stringify(notDone));
            setSelect([]);
        })
    }

    return (
        <div>
            <div className="content m-auto" style={{ margin: "40px", width: "700px", justifyContent: "center" }}>
                <div className="notebook-page">
                    {
                        pending.length > 0 ?
                        <div>
                            <div className="d-flex w-100 justify-content-end align-items-center gap-2 p-2">
                                <Input className=" w-50" placeholder="search" value={searchPending} onChange={(e) => setSearchPending(e?.target.value)} style={{boxShadow: "none"}} />
                            </div>
                            <div className="header">
                                <h1 className="text-center p-2" style={{ fontWeight: "bold", fontSize: "45px", padding: "10px", color: "#131355" }}>Pending List</h1>
                            </div>

                            <div className="text-end mt-3 me-3">
                                <div className="d-flex justify-content-end">
                                    <Input type="checkbox" style={{ boxShadow: "none", borderRadius: "50%", fontSize: "22px", border: "none", border: "1px solid gray" }} onChange={selectPeAllData} checked={pending.length === select.length} />
                                    <Label role="button" style={{ fontWeight: "bold ", fontSize: "22px", paddingLeft: "10px" }}>Select All</Label>
                                </div>
                            </div>
                            <div>
                                {
                                    pending.map((e, i) => {
                                        return (
                                            <div key={i} style={{ width: "100%" }} >
                                                <div className="border-bottom border-1 dark pb-2 w-100 gap-2" style={{ display: "flex", alignItems: "center" }}>
                                                    <div>
                                                        <h3 className="dud" style={{ paddingLeft: "45px" }}>{i + 1}.</h3>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                                        <h3 className='m-0'> {e}</h3>
                                                        <div className="m-2 bd">
                                                            <Input type="checkbox" style={{ padding: "10px", borderRadius: "50px",marginRight: "2px", boxShadow: "none" }} checked={select.includes(i)} onClick={() => checkHAndler(i)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <div className="text-center mt-3">
                                <Button onClick={submitHandler} color="danger">Submit</Button>
                            </div>
                        </div>:
                        (
                            <h1 className="text-center mt-3" style={{color:'#131355', fontWeight: "bold"}}>Please Add Some Todo</h1>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
