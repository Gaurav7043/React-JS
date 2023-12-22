import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Table } from 'reactstrap'

export default function Data() {
    let nameArr = [
        {name : "Gaurav", age : 23},
        {name : "Harsh", age : 22}
    ]
    const navigate = useNavigate()

    return (
        <>
            <Table striped className='w-50 m-auto mt-4 text-center'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nameArr.map((e, i)=>{
                            return(
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td role='button' onClick={()=>navigate(`/name/${e.name}`)}>{e.name}</td>
                                    <td role='button' onClick={()=>navigate(`/age/${e.age}`)}>{e.age}</td>
                                    <td><Button color='danger' onClick={()=>navigate(`/info/${e.name}/${e.age}`)} >Show Data</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
