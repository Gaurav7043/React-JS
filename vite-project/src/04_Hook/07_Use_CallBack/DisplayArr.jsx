import React, { useEffect, useState } from 'react'

export default function DisplayArr({ cbFun }) {
    let [arr, setArr] = useState([])

    useEffect(()=>{
        let a = cbFun()
        setArr(a)
    }, [cbFun])

    return (
        <>
            <div className='text-center'>
                <h3>Number = {arr[0]}</h3>
                <h3>Number + 1 = {arr[1]}</h3>
                <h3>Number + 2 = {arr[2]}</h3>
            </div>
        </>
    )
}
