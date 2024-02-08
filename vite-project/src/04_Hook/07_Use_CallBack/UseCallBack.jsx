import React, { useCallback, useEffect, useState } from 'react'
import { Button } from 'reactstrap'

function fun(count) {
    console.log("----generateArr------->");
    for (let i = 0; i < 1000000000; i++) { }
    let arr = [count, count + 1, count + 2]
    return arr
}

export default function UseCallBack() {
    let [count, setCount] = useState(0)
    let [amount, setAmount] = useState(0)
    let [arr, setArr] = useState([])

    let cbFun = useCallback(() => {
        return fun(count)
    }, [count])

    useEffect(() => {
        let next3NumberArr = cbFun()
        setArr(next3NumberArr)
    }, [cbFun])

    return (
        <>
            <div className='text-center'>
                <h3>Number = {arr[0]}</h3>
                <h3>Number + 1 = {arr[1]}</h3>
                <h3>Number + 2 = {arr[2]}</h3>
                <hr className='mt-3 mb-2' style={{ width: "25%", margin: "auto" }} />
                <h2>Count is {count}</h2>
                <Button color='danger' onClick={() => setCount(count + 1)}>Inc</Button>
                <hr className='mt-3 mb-2' style={{ width: "25%", margin: "auto" }} />
                <h2>Amount is {amount}</h2>
                <Button color='danger' onClick={() => setAmount(amount + 1)}>Inc</Button>

            </div>
        </>
    )
}
