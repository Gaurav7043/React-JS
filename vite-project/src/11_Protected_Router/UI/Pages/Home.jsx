import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Label } from 'reactstrap'


export default function Home() {
    // const navigate = useNavigate()
    // let [check, setCheck] = useState([])

    // const checkHandler = (item)=>{
    //     const matchItem = check?.includes(item)
    //     if(matchItem){
    //         let fliter = check?.filter((e)=> e !== item)
    //         setCheck(fliter)
    //     }else{
    //         setCheck([...check, item])
    //     }
    // }

    return (
        <>
            <div className='text-center'>
                <h1>Home</h1>
                {/* {
                    check.map((e, i)=>{
                        return(
                            <h1 key={i}>{e}</h1>
                        )
                    })
                }
                <div className='gap-3 d-flex'>
                    <Input checked={check?.includes("h1")} onClick={()=>checkHandler("h1")} type="checkbox" />
                    <Label check>h1</Label>
                    <Input checked={check?.includes("h2")} onClick={()=>checkHandler("h2")} type="checkbox" />
                    <Label check>h2</Label>
                    <Input checked={check?.includes("h3")} onClick={()=>checkHandler("h3")} type="checkbox" />
                    <Label check>h3</Label>
                </div>
                <Button className='ms-2 mb-2' color='danger' onClick={()=>navigate(-1)}>Go Back</Button> */}
            </div>
        </>
    )
}