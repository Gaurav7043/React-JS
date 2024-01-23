import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'

export default function User() {
    let [user, setUser] = useState()

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("dataArray")) || []
        setUser(data)
    }, [])

    return (
        <>
            {
                user?.length === 0 ? (
                    <h1>No User Data Available</h1>
                ):(
                    <Table striped>
                        <thead>
                            <tr className='text-center'>
                                <th>Sr.No</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Hobbies</th>
                                <th>User Type</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user?.map((e, i)=>{
                                    if(e.userType === "user"){
                                        return (
                                            <tr key={i} style={{ textAlign: "center" }}>
                                                <th scope="row">{i + 1}</th>
                                                <td>{e.email}</td>
                                                <td>{e.gender}</td>
                                                <td>{`${e?.hobbies}`}</td>
                                                <td>{e.userType}</td>
                                                <td>{e.Password}</td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </Table>
                )
            }
        </>
    )
}
