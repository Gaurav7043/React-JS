import React from 'react'
import { Button } from 'reactstrap'

export default function Local_Storage_Remove_Clear() {
    return (
        <>
            <div className='w-25 m-auto border dark mt-3 text-center'>
                <Button className='m-2' onClick={()=>localStorage.setItem("Name", "Gaurav")}>Add Name</Button>
                <Button className='m-2' onClick={()=>localStorage.setItem("Age", "22")}>Add Age</Button>
                <Button className='m-2' onClick={()=>{localStorage.removeItem("Name")}}>Remove Name</Button>
                <Button className='m-2' onClick={()=>localStorage.clear()}>Clear</Button>
            </div>
        </>
    )
}
