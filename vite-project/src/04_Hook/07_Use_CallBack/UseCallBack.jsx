import React, { useCallback, useState } from 'react'
import { Button } from 'reactstrap'
import DisplayArr from './DisplayArr'


export default function UseCallBack() {
    let [count, setCount] = useState(0)
    let [amount, setAmount] = useState(0)

    let cbFun = useCallback(() => {
        return () => {
            console.log("----generateArr------->");
            for (let i = 0; i < 1000000000; i++) { }
            let arr = [count, count + 1, count + 2]
            return arr
        }
    }, [count])

    return (
        <>
            <div className='text-center'>
                <DisplayArr cbFun={cbFun} />
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
